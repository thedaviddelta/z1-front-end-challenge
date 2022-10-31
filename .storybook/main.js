const svgLoader = require('../scripts/webpack/svgLoader.js');

// Override Storybook svg loader behaviour
function removeSvgLoader(config) {
  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg'),
  );
  fileLoaderRule.exclude = /\.svg$/;
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    removeSvgLoader(config);
    svgLoader(config);
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  features: {
    postcss: false,
  },
};
