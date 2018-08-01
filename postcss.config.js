module.exports = {
  plugins: [
    require('postcss-mixins')({
      mixins: require('./src/client/app/postcss-mixins.js'),
    }),
    require('postcss-env-function')({
      variables: require('./src/client/app/postcss-variables.js'),
    }),
    require('postcss-color-mod-function'),
    require('postcss-nesting'),
  ],
};
