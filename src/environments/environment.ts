// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  	production: false,
	firebaseConfig :   {
    apiKey: "AIzaSyDlc5iYV2yoIJZCzD7sJ4wwrrNN5bDCoAU",
    authDomain: "waste-watchers.firebaseapp.com",
    databaseURL: "https://waste-watchers.firebaseio.com",
    projectId: "waste-watchers",
    storageBucket: "waste-watchers.appspot.com",
    messagingSenderId: "547924546363"
  }
};
