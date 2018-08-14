module.exports = {
  plugins: [
    require('postcss-mixins')({
      mixins: require('./src/postcss-mixins.js'),
    }),
    require('postcss-env-function')({
      variables: require('./src/postcss-variables.js'),
    }),
    require('postcss-color-mod-function'),
    require('postcss-nesting'),
  ],
};
