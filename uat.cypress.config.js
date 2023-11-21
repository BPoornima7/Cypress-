const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "video":true,
    "retries":{

      "openMode":1,
      "runMode":1
    },
    
    

    
    
    
  
    


setupNodeEvents (on, config) {

  require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      

    },
  },
});

