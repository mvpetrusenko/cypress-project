const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.youtube.com', 
    specPattern: 'cypress/e2e/smoke/**/*.cy.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
