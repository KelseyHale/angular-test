exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'spec/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome' // you can use some other browser here
  },

  baseUrl: 'http://localhost:9000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
