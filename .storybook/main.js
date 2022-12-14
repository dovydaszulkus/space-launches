const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-react-router-v6',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/config': path.resolve(__dirname, '../src/config'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/assets': path.resolve(__dirname, '../src/assets'),
      '@/layout': path.resolve(__dirname, '../src/layout'),
      '@/services': path.resolve(__dirname, '../src/services'),
      '@/helpers': path.resolve(__dirname, '../src/helpers'),
    }

    return config
  },
}
