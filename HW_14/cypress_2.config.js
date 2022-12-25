const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5s6jpj",
  e2e: {
   baseUrl: 'https://santa-secret.ru/',
   env:{
    username: 'katarinami@inbox.ru',
    password: '{{$passwordNew}}',
    watchForFileChanges: false
   },
   setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
