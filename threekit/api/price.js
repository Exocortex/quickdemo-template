import http from '../http';

export const getPricebooksList = async () => {
  const [response, error] = await http.pricebook.getList();
  if (error) return [undefined, error];
  return [response.pricebooks, undefined];
};
