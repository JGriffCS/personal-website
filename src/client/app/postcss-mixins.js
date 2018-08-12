const variables = require('./postcss-variables');

module.exports = {
  // TODO: Accept hex colors as args to avoid base
  checkered: (mixin, cols) => {
    // If no columns passed or if the number of columns is odd, even/odd does the trick
    if (!cols || cols % 2 !== 0) {
      return {
        '&:nth-child(odd)': {
          'background-color': variables['--color-primary'],
        },
        '&:nth-child(even)': {
          'background-color': variables['--color-alternate'],
        },
      };
    }

    // The nature of a checkered pattern requires a repeating pattern over 2 rows
    const rows = 2;
    const total = rows * cols;

    // Case of nth-child(total * n) is difficult to accomplish in the loop
    const mixinObj = {
      [`&:nth-child(${total}n)`]: {
        'background-color': variables['--color-primary'],
      },
    };

    for (let i = 1; i < total; i++) {
      let backgroundColor = variables['--color-primary'];

      // Column colors of second row should be the reverse of first row
      if ((i + Math.ceil(i / cols)) % 2 !== 0) {
        backgroundColor = variables['--color-alternate'];
      }

      mixinObj[`&:nth-child(${total}n+${i})`] = {
        'background-color': backgroundColor,
      };
    }

    return mixinObj;
  },
  title_font: {
    'font-family': 'Carrois Gothic SC, sans-serif',
  },
};
