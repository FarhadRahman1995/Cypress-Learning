const { defineConfig } = require("cypress");

module.exports = {
  projectId: "fiqti3",
  // ...rest of the Cypress project config
}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

module.exports = defineConfig({
  e2e: {
    projectId: 'fiqti3', // <- add this line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  
  reporter: 'mochawesome',
    reporterOptions: {
      // To display small circular charts regarding test results
      charts: true,
      // Generate JSON file to create custom reports
      json: true,
      // Customize the directory in which reports are saved
      reportsDir: 'cypress/mochaweosme-report',
      // Customize the report file name
      reportFilename: 'my-report',
      // Generate new report file or overwrite the a single file
      overwrite: false,
      html: false,
    },
});
