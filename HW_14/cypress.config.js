const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5s6jpj",
  e2e: {
   baseUrl: 'https://staging.lpitko.ru/',
   username: 'katarinami@inbox.ru',
   password: '{{$passwordNew}}',
   setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
