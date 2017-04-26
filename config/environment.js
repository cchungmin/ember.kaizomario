/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kaizomario',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
		firebase: {
			apiKey: "AIzaSyBR_rOY7RY6Hr91yRW_RuodfuIZuzmNlZA",
			authDomain: "popping-heat-9561.firebaseapp.com",
			databaseURL: "https://popping-heat-9561.firebaseio.com",
			projectId: "firebase-popping-heat-9561",
			storageBucket: "firebase-popping-heat-9561.appspot.com",
			messagingSenderId: "711965991150"
		},
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
