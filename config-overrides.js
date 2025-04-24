module.exports = {
  webpack: (config) => {
    config.entry = {
      main: './src/index.js',
      content: './public/content.js'
    };
    return config;
  }
};