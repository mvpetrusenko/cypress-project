// to install cypress-grep plugin for tags run: 
// npm install cypress-grep --save-dev 
// to install report: npm install --save-dev cypress-mochawesome-reporter
// after running tests HTML report will be added to cypress/reports folder (npx cypress run: to show where cypress report is saved) 
// install "Live Server" extensions to open report in a browser


const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false, 
    html: true, 
    json: true,
  },
  e2e: {
    baseUrl: 'https://www.youtube.com', 
    specPattern: 'cypress/e2e/smoke/**/*.cy.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;
      // implement node event listeners here
    },
  },
});
