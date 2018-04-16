const express = require('express');
const path = require('path');
const mysql = require('mysql');

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const app = express();
const conn = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.static(__dirname +'./../../dist')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

app.get('/blogposts', require('./routes/blog_posts.js')({ conn }));

app.get('*', (req, res) => {
  console.log(path.resolve(__dirname + './../../dist/index.html'));
  res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});
