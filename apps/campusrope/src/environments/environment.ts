// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'http://localhost:3333/api',
  firebase:  {
    apiKey: "AIzaSyAa728q8kqU6-C6eY5YRamkc6O6Sk3F1gY",
    authDomain: "rope-1538054607266.firebaseapp.com",
    databaseURL: "https://rope-1538054607266.firebaseio.com",
    projectId: "rope-1538054607266",
    storageBucket: "rope-1538054607266.appspot.com",
    messagingSenderId: "988043376297",
    appId: "1:988043376297:web:e5015ffde433693b"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
