require('dotenv-extended').config({
  path: './acceptance/config/codecept.dev.env',
  default: './acceptance/config/codecept.env',
});

const { configure, cleanReports } = require('./packages/codeceptjs-configure');
const REPORT_OUTPUT_DIR = './acceptance/report';

let conf = {
  name: 'Codeceptjs - BDD',

  repository: '',

  output: REPORT_OUTPUT_DIR,

  bootstrap: (callback) => {
      cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback });
  },

  helpers: {
      PlaywrightHelper: {
          require: './packages/codeceptjs-configure/lib/helpers/playwright.helper.js',
      },
  },

  /********************** Enable additional plugins as required
   * 
   * plugins: {
      retryFailedTests: {
          enabled: false,
          retries: 1,
          require: 'codeceptjs-configure/plugins/retry-failed-tests.plugin.js',
      },
  },
   */
};

const config = configure.create(conf);
exports.config = config;

// exports.config = {
//   output: './output',
//   helpers: {
//     Playwright: {
//       url: 'http://localhost',
//       show: true,
//       browser: 'chromium'
//     }
//   },
//   include: {
//     I: './steps_file.js'
//   },
//   mocha: {},
//   bootstrap: null,
//   timeout: null,
//   teardown: null,
//   hooks: [],
//   gherkin: {
//     features: './features/*.feature',
//     steps: ['./step_definitions/steps.js']
//   },
//   plugins: {
//     screenshotOnFail: {
//       enabled: true
//     },
//     tryTo: {
//       enabled: true
//     },
//     retryFailedStep: {
//       enabled: false
//     },
//     retryTo: {
//       enabled: true
//     },
//     eachElement: {
//       enabled: true
//     },
//     pauseOnFail: {}
//   },
//   stepTimeout: 0,
//   stepTimeoutOverride: [{
//       pattern: 'wait.*',
//       timeout: 0
//     },
//     {
//       pattern: 'amOnPage',
//       timeout: 0
//     }
//   ],
//   tests: './*_test.js',
//   name: 'codeceptjs-bdd'
// }