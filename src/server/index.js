const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const authentication = require('./middleware/authentication');

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

app.use('/api/admin/*', authentication({ jwt, secret: config.secret }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname +'./../../dist')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

app.get('/api/blogposts', require('./routes/blog_posts.js')({ conn }));

app.post('/api/authenticate', require('./routes/admin/authenticate.js')({ conn, jwt, secret: config.secret }));
app.post('/api/admin/resource_site_categories', require('./routes/admin/resource-site-categories/post.js')({ conn }));

app.delete('/api/admin/resource_site_categories/:categoryId', require('./routes/admin/resource-site-categories/delete.js')({ conn }))

app.get('/api/admin/routes', require('./routes/admin/routes.js')({ conn }));
app.get('/api/admin/resource_site_categories', require('./routes/admin/resource-site-categories/get.js')({ conn }));
app.get('/api/admin/resource_sites/:type_id', require('./routes/admin/resource_sites.js')({ conn }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});
