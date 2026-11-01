const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://automationexercise.com/',
    chromeWebSecurity: false
  },
});