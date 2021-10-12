import { hooks, components, experiences, icons } from './react';
import * as utils from './utils';
import api from './api';
import connection from './connection';

const { ThreekitProvider } = components;

export { hooks, components, ThreekitProvider, experiences, icons };

export default {
  hooks,
  components,
  ThreekitProvider,
  experiences,
  icons,
  utils,
  api,
  connection,
};
