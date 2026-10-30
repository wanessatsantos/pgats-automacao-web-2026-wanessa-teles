const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://www.automationexercise.com/", //Configurando a URL para abrir o site de compras
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
