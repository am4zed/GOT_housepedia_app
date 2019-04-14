const config = {
  entry: `${ __dirname }/src/app.js`,
  output: {
    path: `${ __dirname }/public/js`,
    filename: 'bundle.js'ß
  },
  mode: 'development'
};

module.exports = config;
