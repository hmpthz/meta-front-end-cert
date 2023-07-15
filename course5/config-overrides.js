module.exports = function override(config, env) {
  if (env == 'production') {
    // Set the publicPath option to './' to make the paths relative to the current path
    config.output.publicPath = './';
  }
  return config;
};