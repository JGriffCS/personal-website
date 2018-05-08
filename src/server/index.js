const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(express.static(__dirname +'./../../dist')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

app.get('/blogposts', require('./routes/blog_posts.js')({ conn }));

app.post('/admin/login', require('./routes/login.js')({ conn }));

app.get('/admin/routes', require('./routes/admin_routes.js')({ conn }));
app.get('/admin/resource_site_categories', require('./routes/admin_resource_site_categories.js')({ conn }));
app.get('/admin/resource_sites/:type_id', require('./routes/admin_resource_sites.js')({ conn }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});
