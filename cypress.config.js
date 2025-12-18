const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    host: "https://bajratechnologies.com/web/login",
    baseUrl: "https://bajratechnologies.com/web/login",
  },
});
