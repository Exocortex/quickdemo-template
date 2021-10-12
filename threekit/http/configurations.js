import { threekitRequest } from './request';

const CONFIGURATIONS_API_ROUTE = `/api/configurations`;

export const postConfiguration = (formData) => {
  let error;
  if (!formData) error = 'Requires Form Data';
  if (error) return [undefined, { message: error }];
  return threekitRequest({
    method: 'POST',
    url: CONFIGURATIONS_API_ROUTE,
    formData,
  });
};

export const getSavedConfiguration = (configurationId) => {
  let error;
  if (!configurationId) error = 'Requires Configuration ID';
  if (error) return [undefined, { message: error }];
  return threekitRequest(`${CONFIGURATIONS_API_ROUTE}/${configurationId}`);
};

export const getConfigurations = () =>
  threekitRequest({
    method: 'GET',
    url: `${CONFIGURATIONS_API_ROUTE}`,
    includeOrgId: true,
  });
