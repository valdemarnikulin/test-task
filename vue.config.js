const { defineConfig } = require("@vue/cli-service");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
    plugins: [new SpriteLoaderPlugin()],
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-sprite-loader",
              options: {
                extract: true,
                spriteFilename: "./public/icons/sprite.svg",
              },
            },
            "svgo-loader",
          ],
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
});
