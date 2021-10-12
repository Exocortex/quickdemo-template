import { threekitRequest } from './request';

const PRODUCTS_API_ROUTE = `/api/products`;

export const getTranslations = () =>
  threekitRequest(`${PRODUCTS_API_ROUTE}/translations`);
