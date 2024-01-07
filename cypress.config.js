const { defineConfig } = require("cypress");
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

//Mergre multiple json to 1 file command: npx mochawesome-merge ./mochawesome-report/*.json -o ./final_report.json
//Then JSON to HTML report generate command: npx marge ./final_report.json -o ./mochawesome-report

module.exports = defineConfig({
  e2e: {
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
