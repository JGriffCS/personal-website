const express = require('express');

const app = express();

app.use(express.static(__dirname +'./../../dist')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '../../dist/index.html'), { root: __dirname });
// });