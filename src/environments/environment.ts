// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: 'AIzaSyBKfwP9vGvZz_0H_edoJLpaGWZL34nFA8g',
  authDomain: 'campus-academy.firebaseapp.com',
  databaseURL: 'https://campus-academy.firebaseio.com',
  projectId: 'campus-academy',
  storageBucket: 'campus-academy.appspot.com',
  messagingSenderId: '751661887463',
  appId: '1:751661887463:web:dfb6685702ab0017fa1742'
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
