const path = require("path");

const sourcePath = path.resolve(__dirname, "src/");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: `${sourcePath}/components`,
        services: `${sourcePath}/services`,
        assets: `${sourcePath}/assets`,
        app: `${sourcePath}/app`,
        views: `${sourcePath}/views`
      }
    }
  }
};
