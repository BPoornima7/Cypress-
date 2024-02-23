const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  


  
  e2e: {

   'env':{
      'baseurl':'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      'Admin':'Admin',
      'Password':'admin123',
    },


   "projectId": "xind2m",
   
    "videosFolder":"cypress/poornima",
    "videoCompression":0,


    //"video":true,
     "retries":{

      "openMode":1,
       "runMode":1
     },
   
setupNodeEvents (on, config) {

  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);
            return config;
      // implement node event listeners here
      

    },
  },
});

