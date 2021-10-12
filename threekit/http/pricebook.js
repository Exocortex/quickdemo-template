import { threekitRequest } from './request';
import connection from '../connection';

export const getList = () => {
  const { orgId } = connection.getConnection();
  return threekitRequest(`/api/orgs/${orgId}/pricebooks`);
};
