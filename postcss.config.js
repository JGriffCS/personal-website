module.exports = {
  plugins: [
    require('postcss-env-function')({
      variables: require('./src/client/app/postcss-variables.js'),
    }),
    require('postcss-color-mod-function'),
    require('postcss-nesting'),
  ],
};
