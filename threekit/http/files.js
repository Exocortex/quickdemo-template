import { threekitRequest } from './request';

const FILES_API_ROUTE = `/api/files`;

export const postFile = (formData) => {
  let error;
  if (!formData) error = 'Requires Form Data';
  if (error) return [undefined, { message: error }];
  return threekitRequest({
    method: 'POST',
    url: FILES_API_ROUTE,
    formData,
  });
};
