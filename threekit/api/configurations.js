import http from '../http';
import FormData from 'form-data';

export const save = async ({
  assetId,
  customerId,
  configuration,
  metadata,
  productVersion,
  thumbnail,
}) => {
  let message;
  if (!assetId) message = 'Requires Asset Id';
  if (!configuration) message = 'Requires a configuration';
  if (message) return [undefined, { message }];

  const fd = new FormData();
  fd.append('productId', assetId);
  fd.append('variant', JSON.stringify(configuration));
  fd.append('productVersion', productVersion);
  if (metadata && Object.keys(metadata))
    fd.append('metadata', JSON.stringify(metadata));
  if (customerId) fd.append('customerId', customerId);
  if (thumbnail) fd.append('thumbnail', thumbnail);

  return await http.configurations.postConfiguration(fd);
};

export const fetch = (configurationId) => {
  let message;
  if (!configurationId) message = 'Requires Configuration Id';
  if (message) return resolve([undefined, { message }]);

  return http.configurations.getSavedConfiguration(configurationId);
};

export const fetchAll = () =>
  new Promise(async (resolve) => {
    const [data, error] = await http.configurations.getConfigurations();
    if (error) return resolve([undefined, error]);
    resolve([data.configurations, undefined]);
  });
