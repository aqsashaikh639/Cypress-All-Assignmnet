const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://playlists2.radioedit.ihrint.com/playlists",
     pageLoadTimeout: 360000, // 2 minutes
     setupNodeEvents(on, config) {
            // implement node event listeners here
        },
  },
});
