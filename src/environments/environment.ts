// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
  firebase: {
    projectId: 'petstopdb',
    appId: '1:419322434030:web:c54dd861be9fa4b71cfeff',
    databaseURL: 'https://petstopdb-default-rtdb.firebaseio.com',
    storageBucket: 'petstopdb.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBrtSxoxgdqmC_qnVAgD-WpQ1XSzM8W5Vc',
    authDomain: 'petstopdb.firebaseapp.com',
    messagingSenderId: '419322434030',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
