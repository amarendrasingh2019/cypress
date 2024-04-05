const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome'
})
module.exports = defineConfig({
  
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
  },
  chromeWebSecurity: false,
 
  e2e: {
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    
    watchForFileChanges:false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout:20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
 
  }
  
});
