const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },
  features: {
    storyStoreV7: true
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
      "@styles": path.resolve(__dirname, "../styles/")
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};