const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5s6jpj",
  e2e: {
   baseUrl: 'https://staging.lpitko.ru',
   env:{
    username: 'katarinami@inbox.ru',
    password: '1qaz2wsx',
    watchForFileChanges: false
   },
   setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
