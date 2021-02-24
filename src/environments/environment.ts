import { ENV } from 'src/app/shared/configs/env.config';

export const environment = {
  appVersion: require('../../package.json').version + ' | ' + new Date().toISOString().substring(0, 10),
  enableConsole: true,
  production: true,
  urlApi: ENV.development.urlApi,
};

