import { IConfig } from './config';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment:IConfig = {
  production: false,
  db:'mongodb://campusrope:uniteall1@ds145053.mlab.com:45053/campusrope',
  addAuthorization: true,
  verbose: true,
  verboseApi: true,
};
