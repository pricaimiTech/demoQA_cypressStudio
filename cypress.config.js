const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://todomvc.com/examples/vanillajs'
  },
});
