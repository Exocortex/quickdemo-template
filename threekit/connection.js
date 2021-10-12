import Joi from 'joi';
import { DEFAULT_SERVER_URL } from './constants';

const connectionObj = Joi.object({
  authToken: Joi.string()
    .guid({
      version: ['uuidv4'],
    })
    .required(),
  orgId: Joi.string().required(),
  assetId: Joi.string(),
  threekitEnv: Joi.string(),
  serverUrl: Joi.string().allow(''),
});

const checkRuntime = new Function(
  'try { return this === window; } catch(e) { return false; }'
);

class ThreekitConnection {
  constructor() {
    this._authToken;
    this._orgId;
    this._assetId;
    this._threekitEnv = 'https://admin.threekit.com';
    this._isServerEnv = !checkRuntime();
    this._serverUrl = DEFAULT_SERVER_URL;
  }

  async connect(config) {
    const preppedConfig = {
      ...config,
      authToken: this._authToken || config.authToken,
      orgId: this._orgId || config.orgId,
    };
    const { value, error } = connectionObj.validate(preppedConfig);
    if (error) throw new Error(error);
    this._authToken = value.authToken;
    this._orgId = value.orgId;
    this._assetId = value.assetId;
    if (value.threekitEnv) this._threekitEnv = `https://${value.threekitEnv}`;
    if (value.serverUrl?.length) this._serverUrl = value.serverUrl;
  }

  getConnection() {
    if (!this._authToken)
      throw new Error('Connection has not been established');
    return {
      authToken: this._authToken,
      orgId: this._orgId,
      assetId: this._assetId,
      threekitEnv: this._threekitEnv,
      isServerEnv: this._isServerEnv,
      serverUrl: this._serverUrl,
    };
  }
}

const connection = new ThreekitConnection();

export default connection;
