const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lauta",
    projectName: "right-panel",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
  });
};
