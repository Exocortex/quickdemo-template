import connection from '../connection';
import threekitAPI from '../api';
import {
  shallowCompare,
  deepCompare,
  getCameraPosition,
  setCameraPosition,
  regularToKebabCase,
} from '../utils';
import {
  ATTRIBUTES_RESERVED,
  SNAPSHOT_FORMATS,
  SNAPSHOT_OUTPUTS,
  DEFAULT_PLAYER_CONFIG,
  TK_SAVED_CONFIG_PARAM_KEY,
} from '../constants';
import { dataURItoBlob, getParams, objectToQueryStr } from '../utils';

class Controller {
  constructor({
    player,
    configurator,
    translations,
    language,
    toolsList,
    priceConfig,
  }) {
    //  Threekit API
    this._api = threekitAPI;
    this._player = player.enableApi('player');
    //  Translations
    this._translations = translations;
    this._currentLanguage = language;
    //  History
    this._history = [[{}, configurator.getConfiguration()]];
    this._historyPosition = 0;
    //  Tools
    this._toolsList = toolsList || new Set([]);
    //  Nested Configurators
    this._nestedConfigurator = undefined;
    this._nestedConfiguratorAddress = undefined;
    //  Resume Link
    this._savedConfiguration;
    //  Pricebooks
    this._priceConfig = priceConfig;
    //  Wishlist
    this._wishlistId = undefined;
    this._isWishlistCreated = undefined;
  }

  static createPlayerLoaderEl() {
    let playerElement = document.getElementById('player-root');
    if (playerElement) return playerElement;

    playerElement = document.createElement('div');
    playerElement.setAttribute('id', 'player-root');
    playerElement.style.height = '100%';

    const playerLoader = document.createElement('div');
    playerLoader.appendChild(playerElement);
    playerLoader.style.opacity = '0';
    playerLoader.style.position = 'fixed';
    playerLoader.style.opacity = '-100%';

    document.body.appendChild(playerLoader);
    return playerElement;
  }

  static createThreekitScriptEl(threekitEnv) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `${threekitEnv}/app/js/threekit-player-bundle.js`;
      script.id = 'threekit-player-bundle';
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  static initThreekit(config) {
    return new Promise(async (resolve) => {
      const player = await window.threekitPlayer(config);
      const configurator = await player.getConfigurator();
      resolve({ player, configurator });
    });
  }

  static attachPlayerToComponent(moveToElementId) {
    const addPlayer = (tryCount = 0) => {
      if (tryCount >= 10) return;

      let player = document.getElementById('player-root');
      const playerWrapper = document.getElementById(moveToElementId);

      if (!player || !playerWrapper)
        return setTimeout(() => {
          addPlayer(tryCount + 1);
        }, 0.05 * 1000);

      if (!player) throw new Error('Initial Player element not found');
      if (!playerWrapper) throw new Error('Move To element not found');

      playerWrapper.appendChild(player);
    };

    addPlayer();
  }

  static getConfiguration(configurationId) {
    return new Promise(async (resolve) => {
      if (!configurationId) {
        if (!window.threekit) return resolve();
        resolve(window.threekit.controller._player.getFullConfiguration());
      }
      const [config, error] = await threekitAPI.configurations.fetch(
        configurationId
      );
      if (error) throw new Error(error);
      resolve(config);
    });
  }

  static async launch(config) {
    return new Promise(async (resolve) => {
      if (window.threekit) resolve();
      const {
        //  Threekit Player Init
        authToken,
        orgId,
        elementId,
        cache,
        stageId,
        assetId,
        showConfigurator,
        initialConfiguration: initialConfigurationRaw,
        showLoadingThumbnail,
        showLoadingProgress,
        onLoadingProgress,
        showAR,
        showShare,
        locale,
        allowMobileVerticalOrbit,
        publishStage,
        //  Threekit Env (e.g. preview, admin-fts)
        threekitEnv: threekitEnvRaw,
        //  Base URL to express.js backend on which the built app is served
        serverUrl,
        //  Additional tools to attach to the Threekit Player
        additionalTools,
      } = Object.assign(DEFAULT_PLAYER_CONFIG, config);

      //  Connection
      connection.connect({
        authToken,
        orgId,
        assetId,
        threekitEnv: threekitEnvRaw,
        serverUrl,
      });

      //  We use the threekitEnv returned by the connection object
      //  As it ensures the env base url starts with 'https://'
      const { threekitEnv } = connection.getConnection();

      //  Initial Configuration from Params
      let initialConfiguration = { ...initialConfigurationRaw };
      let updatedAssetId = assetId;
      const params = getParams();

      if (params[TK_SAVED_CONFIG_PARAM_KEY]?.length) {
        const configuration = await this.getConfiguration(
          params[TK_SAVED_CONFIG_PARAM_KEY]
        );
        if (configuration) {
          initialConfiguration = Object.assign(
            {},
            initialConfigurationRaw,
            configuration.variant
          );
          connection.connect({ assetId: configuration.productId });
          updatedAssetId = configuration.productId;
        }
      }

      //  We get or create the player HTML element
      let el = document.getElementById(elementId);
      if (!el) el = this.createPlayerLoaderEl();

      //  We create the threekit script
      await this.createThreekitScriptEl(threekitEnv);

      const [
        { player, configurator },
        [translations, translationErrors],
      ] = await Promise.all([
        this.initThreekit({
          el,
          authToken,
          orgId,
          cache,
          stageId,
          assetId: updatedAssetId,
          threekitEnv,
          showConfigurator,
          initialConfiguration,
          showLoadingThumbnail,
          showLoadingProgress,
          onLoadingProgress,
          showAR,
          showShare,
          locale,
          allowMobileVerticalOrbit,
          publishStage,
        }),
        threekitAPI.products.fetchTranslations(),
      ]);

      let toolsList = new Set([]);
      if (additionalTools?.length) {
        additionalTools.flat().forEach((toolFunc) => {
          const tool = toolFunc(player);
          if (toolsList.has(tool.key)) return;
          toolsList.add(tool.key);
          player.tools.addTool(tool);
        });
      }

      if (translationErrors) console.log(translationErrors);

      const pricebook = await threekitAPI.price.getPricebooksList();

      window.threekit = {
        player,
        configurator,
        controller: new Controller({
          player,
          configurator,
          translations: translations,
          language: locale,
          toolsList,
          priceConfig: pricebook[0].length
            ? {
                id: pricebook[0][0].id,
                currency: pricebook[0][0].currencies[0],
              }
            : undefined,
        }),
      };
      resolve();
    });
  }

  _getNestedConfigurator(address) {
    const player = window.threekit.player.enableApi('player');
    if (JSON.stringify(address) === this._nestedConfiguratorAddress)
      return this._nestedConfigurator;
    this._nestedConfiguratorAddress = JSON.stringify(address);
    this._nestedConfigurator = address.reduce((configurator, attributeName) => {
      const itemId = configurator.getAppliedConfiguration(attributeName);
      return window.threekit.player.scene.get({
        id: itemId,
        evalNode: true,
      }).configurator;
    }, player.getConfigurator());
    return this._nestedConfigurator;
  }

  _translateAttribute(attr) {
    return {
      ...attr,
      label:
        this._translations?.[attr.name]?.[this._currentLanguage] || attr.name,
      values: !Array.isArray(attr.values)
        ? attr.values
        : attr.values.map((el) =>
            Object.assign({}, el, {
              label:
                this._translations?.[
                  attr.type === 'String' ? el.label : el.name
                ]?.[this._currentLanguage] ||
                (attr.type === 'String' ? el.label : el.name),
            })
          ),
    };
  }

  _pushToHistory(historyItem) {
    if (!this._history) {
      this._history = [historyItem];
      return;
    }

    if (this._historyPosition === this._history.length - 1) {
      this._history.push(historyItem);
      this._historyPosition++;
      return;
    }

    this._history.splice(this._historyPosition + 1);
    this._history.push(historyItem);
    this._historyPosition++;
  }

  _compareAttributes(attributes1, attributes2) {
    let updatedAttributes = new Set([]);

    const attributesObj1 = attributes1.reduce(
      (output, el) => Object.assign(output, { [el.name]: el }),
      {}
    );
    const attributesObj2 = attributes2.reduce(
      (output, el) => Object.assign(output, { [el.name]: el }),
      {}
    );
    const attrKeys1 = Object.keys(attributesObj1);
    const attrKeys2 = Object.keys(attributesObj2);

    //  We compare the attributes on in each object
    attrKeys2
      .filter((attribute) => attrKeys1.indexOf(attribute) === -1)
      .forEach((attribute) => updatedAttributes.add(attribute));
    attrKeys1
      .filter((attribute) => attrKeys2.indexOf(attribute) === -1)
      .forEach((attribute) => updatedAttributes.add(attribute));

    for (let key of attrKeys1) {
      const attr1 = attributesObj1[key];
      const attr2 = attributesObj2[key];

      if (!attr1 || !attr2) continue;

      if (!shallowCompare(attr1.value, attr2.value)) {
        updatedAttributes.add(key);
        continue;
      }

      if (!deepCompare(attr1.values, attr2.values)) {
        updatedAttributes.add(key);
        continue;
      }
    }

    return Array.from(updatedAttributes);
  }

  _updateConfiguration(configuration) {
    return new Promise(async (resolve) => {
      const currentState = JSON.parse(
        JSON.stringify(window.threekit.configurator.getDisplayAttributes())
      );
      await window.threekit.configurator.setConfiguration(configuration);
      const updatedState = window.threekit.configurator.getDisplayAttributes();
      const updatedAttrs = this._compareAttributes(currentState, updatedState);
      if (updatedAttrs.length) this._savedConfiguration = undefined;
      resolve(updatedAttrs);
    });
  }

  getName() {
    if (!window.threekit) return undefined;
    return window.threekit.player.scene.get(window.threekit.player.instanceId)
      .name;
  }

  getPrice() {
    if (!this._priceConfig?.id) return null;
    const price = window.threekit.configurator.getPrice(
      this._priceConfig.id,
      this._priceConfig.currency
    );
    return { price, currency: this._priceConfig.currency };
  }

  addTool(tools) {
    if (!tools) return;
    const toolsToAdd = Array.isArray(tools) ? tools : [tools];

    toolsToAdd.flat().forEach((toolFunc) => {
      const tool = toolFunc(window.threekit.player);
      if (this._toolsList.has(tool.key))
        return console.log(`The tool '${tool.label} has already been added.'`);
      this._toolsList.add(tool.key);
      window.threekit.player.tools.addTool(tool);
    });
  }

  setLanguage(language) {
    if (!language) return;
    this._currentLanguage = language;
    return this.getAttributesState();
  }

  getLanguage() {
    return this._currentLanguage;
  }

  getLanguageOptions() {
    return Object.keys(Object.values(this._translations)[0]);
  }

  getAttributesState(attrNames) {
    const attributes = window.threekit.configurator.getDisplayAttributes();
    const attributesObj =
      attrNames?.reduce(
        (output, el) => Object.assign(output, { [el]: undefined }),
        {}
      ) || {};
    return attributes.reduce((output, attr) => {
      if (attrNames && !attrNames.includes(attr.name)) return output;
      return Object.assign(output, {
        [attr.name]: this._translateAttribute(attr),
      });
    }, attributesObj);
  }

  async setAttributesState(configuration) {
    const updatedAttrNames = await this._updateConfiguration(configuration);
    if (!updatedAttrNames.length) return {};

    const updatedConfiguration = window.threekit.configurator.getConfiguration();
    this._pushToHistory([configuration, updatedConfiguration]);

    return this.getAttributesState(updatedAttrNames);
  }

  getNestedAttributeState(address) {
    if (!address?.length) return;
    const addr = Array.isArray(address) ? address : [address];
    const configurator = this._getNestedConfigurator(addr);
    return configurator.getDisplayAttributes();
  }

  setNestedAttributeState(address, configuration) {
    return new Promise(async (resolve) => {
      if (!address?.length) return;
      const addr = Array.isArray(address) ? address : [address];
      const configurator = this._getNestedConfigurator(addr);
      await configurator.setConfiguration(configuration);
      this._savedConfiguration = undefined;
      resolve(configurator.getDisplayAttributes());
    });
  }

  stepHistoryPosition(step) {
    return new Promise(async (resolve) => {
      if (isNaN(step) || step === 0) resolve({});
      if (
        this._historyPosition + step < 0 ||
        this._historyPosition + step >= this._history.length
      )
        resolve({});
      this._historyPosition += step;
      const [_, updatedConfiguration] = this._history[this._historyPosition];
      const updatedAttrNames = await this._updateConfiguration(
        updatedConfiguration
      );
      if (updatedAttrNames.length)
        resolve(this.getAttributesState(updatedAttrNames));
    });
  }

  saveConfiguration(data = {}) {
    return new Promise(async (resolve) => {
      if (this._savedConfiguration && !data?.force)
        resolve(JSON.parse(this._savedConfiguration));
      const {
        configuration,
        productVersion,
        metadata,
        thumbnail,
      } = Object.assign(
        {
          configuration: undefined,
          productVersion: 'v1',
          metadata: {},
          thumbnail: '',
        },
        data
      );

      let preppedConfiguration = configuration;
      if (!preppedConfiguration) {
        preppedConfiguration = window.threekit.configurator.getConfiguration();
        preppedConfiguration = Object.entries(preppedConfiguration).reduce(
          (output, [attrName, attrData]) =>
            attrName.startsWith('_')
              ? output
              : Object.assign(output, { [attrName]: attrData }),
          {}
        );
      }

      const [response, error] = await threekitAPI.configurations.save({
        assetId: window.threekit.player.assetId,
        configuration: preppedConfiguration,
        productVersion,
        metadata,
        thumbnail,
      });

      if (error) resolve(undefined);

      const params = Object.assign(getParams(), {
        [TK_SAVED_CONFIG_PARAM_KEY]: response.shortId,
      });
      const url = window.location.href.replace(window.location.search, '');

      const output = {
        ...response,
        resumableUrl: `${url}${objectToQueryStr(params)}`,
      };

      this._savedConfiguration = JSON.stringify(output);

      resolve(output);
    });
  }

  resumeConfiguration(configurationId) {
    return new Promise(async (resolve) => {
      try {
        const config = await Controller.getConfiguration(configurationId);
        this.setAttributesState(config.variant);
        resolve(config);
      } catch (e) {
        throw new Error(e);
      }
    });
  }

  takeSnapshots(cameras, config) {
    return new Promise(async (resolve) => {
      const { filename, size, format, cameraAttribute, output } = Object.assign(
        {
          filename: `snapshot`,
          size: { width: 1920, height: 1080 },
          format: SNAPSHOT_FORMATS.png,
          cameraAttribute: ATTRIBUTES_RESERVED.camera,
          output: SNAPSHOT_OUTPUTS.blob,
        },
        config
      );
      let snapshots;

      if (!cameras) {
        const snapshotStr = await getSnapshot();
        snapshots = [dataURItoBlob(snapshotStr)];
      } else {
        const camerasList = Array.isArray(cameras) ? cameras : [cameras];
        const cameraPosition = getCameraPosition(window.threekit.player.camera);
        const activeCamera = window.threekit.configurator.getConfiguration()
          ._camera;

        snapshots = await getSnapshots(camerasList);
        await window.threekit.configurator.setConfiguration({
          [cameraAttribute]: activeCamera,
        });
        setCameraPosition(window.threekit.player.camera, cameraPosition);
      }

      switch (output) {
        case SNAPSHOT_OUTPUTS.url:
          const savedSnapshots = await Promise.all(
            snapshots.map((snapshotBlob, idx) => {
              const cameraName = regularToKebabCase(cameras[idx]);
              return saveSnapshotToPlatform(
                snapshotBlob,
                `${filename}-${cameraName}.${format}`
              );
            })
          );
          resolve(savedSnapshots);
          break;
        case SNAPSHOT_OUTPUTS.download:
          snapshots.forEach((snapshotBlob, idx) => {
            let cameraName = '';
            if (cameras) cameraName = `-${regularToKebabCase(cameras[idx])}`;
            downloadSnapshotBlob(
              snapshotBlob,
              `${filename}${cameraName}.${format}`
            );
          });
          resolve();
          break;
        case SNAPSHOT_OUTPUTS.dataUrl:
          const snapshotUrls = snapshots.map((snapshotBlob) =>
            URL.createObjectURL(snapshotBlob)
          );
          resolve(snapshotUrls);
          break;
        case SNAPSHOT_OUTPUTS.blob:
        default:
          resolve(snapshots);
          break;
      }

      function getSnapshot() {
        return window.threekit.player.snapshotAsync({
          size,
          mimeType: `image/${SNAPSHOT_FORMATS[format]}`,
        });
      }

      function getSnapshots(cameras) {
        let snapshots = [];
        return cameras.reduce((snapshotPromise, camera) => {
          return snapshotPromise.then(
            () =>
              new Promise(async (resolve) => {
                await window.threekit.configurator.setConfiguration({
                  [cameraAttribute]: camera,
                });
                const snapshotStr = await getSnapshot();
                const snapshotBlob = dataURItoBlob(snapshotStr);
                snapshots.push(snapshotBlob);
                resolve(snapshots);
              })
          );
        }, Promise.resolve());
      }

      async function saveSnapshotToPlatform(snapshotBlob, filename) {
        return new Promise(async (resolve) => {
          const [response, error] = await threekitAPI.server.saveSnapshot(
            snapshotBlob,
            filename
          );
          if (error) {
            console.log(error);
            return resolve(undefined);
          }
          resolve(response.url);
        });
      }

      async function downloadSnapshotBlob(snapshotBlobl, filename) {
        const blobUrl = URL.createObjectURL(snapshotBlobl);
        const link = document.createElement('a'); // Or maybe get it from the current document
        link.href = blobUrl;
        link.download = filename;
        const clickHandler = () => {
          setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
            link.removeEventListener('click', clickHandler);
          }, 150);
        };

        link.addEventListener('click', clickHandler);
        document.body.appendChild(link);

        link.click();
      }
    });
  }

  getBom() {
    const attributes = window.threekit.configurator.getDisplayAttributes({
      includeHidden: true,
    });
    return attributes.reduce((output, attr) => {
      const value =
        attr.type !== 'Asset'
          ? attr.value
          : attr.values.find((el) => el.assetId === attr.value?.assetId);
      return Object.assign(output, { [attr.name]: value });
    }, {});
  }

  shareEmailConfiguration(data) {
    return new Promise(async (resolve) => {
      if (!data || !data?.email) resolve();

      const promises = [this.saveConfiguration(data.configuration)];

      if (data.cameras) {
        promises.push(
          this.takeSnapshots(data.cameras.length ? data.cameras : undefined, {
            output: SNAPSHOT_OUTPUTS.url,
          })
        );
      }

      const [savedConfiguration, snapshots] = await Promise.all(promises);

      const preppedData = Object.assign(
        { resumableUrl: savedConfiguration.resumableUrl },
        snapshots ? { snapshots } : {},
        data
      );

      await threekitAPI.server.shareEmail(preppedData);
      resolve();
    });
  }

  shareSmsConfiguration(number, messageFunc) {
    return new Promise(async (resolve) => {
      if (!number?.length) resolve();

      const savedConfiguration = await this.saveConfiguration();

      const data = {
        message: messageFunc
          ? messageFunc(savedConfiguration.resumableUrl)
          : `Click her to view your configuration: ${savedConfiguration.resumableUrl}`,
        to: number,
      };

      await threekitAPI.server.shareSms(data);
      resolve();
    });
  }

  getUserWishlist(userId) {
    return new Promise(async (resolve) => {
      if (!userId) return resolve(undefined);

      const [orders, error] = await threekitAPI.orders.fetchOrders({
        _userId: userId,
      });
      if (error) resolve(undefined);

      this._wishlistId = orders[0].shortId;

      if (orders.length && !this._isWishlistCreated)
        this._isWishlistCreated = true;
      else {
        this._isWishlistCreated = false;
        resolve(undefined);
      }

      resolve(orders[0]);
    });
  }

  addToUserWishlist(userId, config) {
    return new Promise(async (resolve) => {
      const {
        configuration,
        productVersion,
        metadata,
        snapshotCamera,
      } = Object.assign({}, config);

      let thumbnail;
      if (snapshotCamera) {
        [thumbnail] = await this.takeSnapshots(snapshotCamera, {
          output: SNAPSHOT_OUTPUTS.url,
        });
      }

      const configurationResponse = await this.saveConfiguration({
        configuration,
        productVersion: productVersion || 'v1',
        thumbnail,
        force: true,
      });

      if (!configurationResponse?.shortId) resolve(undefined);

      let order;

      if (!this._isWishlistCreated) {
        const [newOrder, newOrderError] = await threekitAPI.orders.createOrder({
          metadata: {
            _userId: userId,
          },
          name: 'Wishlist',
          cart: [
            {
              count: 1,
              configurationId: configurationResponse.shortId,
              metadata: Object.assign({ _thumbnail: thumbnail }, metadata),
            },
          ],
        });
        order = newOrder;
      } else {
        const [
          existingOrder,
          existingOrderError,
        ] = await threekitAPI.orders.getOrder(this._wishlistId);
        if (existingOrderError) resolve(undefined);

        const [
          updatedOrder,
          updatedOrderError,
        ] = await threekitAPI.orders.editOrder(this._wishlistId, {
          cart: [
            ...existingOrder.cart,
            {
              count: 1,
              configurationId: configurationResponse.shortId,
              metadata: Object.assign({ _thumbnail: thumbnail }, metadata),
            },
          ],
        });
        order = updatedOrder;
      }
      resolve(order);
    });
  }

  deleteFromUserWishlist(configurationId) {
    return new Promise(async (resolve) => {
      const [
        existingOrder,
        existingOrderError,
      ] = await threekitAPI.orders.getOrder(this._wishlistId);
      if (existingOrderError) resolve(undefined);

      const updatedCart = existingOrder.cart.filter(
        (el) => el.configurationId !== configurationId
      );

      console.log(updatedCart);

      const [
        updatedOrder,
        updatedOrderError,
      ] = await threekitAPI.orders.editOrder(this._wishlistId, {
        cart: updatedCart,
      });
      resolve(updatedOrder);
    });
  }
}

export default Controller;
