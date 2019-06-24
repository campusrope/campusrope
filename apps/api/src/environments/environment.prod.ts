import { IConfig } from './config';

export const environment:IConfig = {
  production: true,
  db:'mongodb://<dbuser>:<dbpassword>@ds145053.mlab.com:45053/campusrope',
  addAuthorization: true,
  verbose: true,
  verboseApi: true,
};
