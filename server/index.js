const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const authentication = require('./middleware/authentication');

const app = express();
const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

// conn.connect((err) => {
//   if (err) throw err;
// });

app.use('/api/admin/*', authentication({ jwt, secret: config.secret }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist'))); // serves the index.html
app.listen(3000); // listens on port 3000 -> http://localhost:3000/

app.post('/api/authenticate', require('./routes/admin/authenticate.js')({ pool, jwt, secret: config.secret }));
app.post('/api/admin/resource_site_categories', require('./routes/admin/resource-site-categories/post.js')({ pool }));
app.post('/api/admin/resource_sites', require('./routes/admin/resource-sites/post.js')({ pool }));

app.delete('/api/admin/resource_site_categories/:category_id', require('./routes/admin/resource-site-categories/delete.js')({ pool }));
app.delete('/api/admin/resource_sites/:site_id', require('./routes/admin/resource-sites/delete.js')({ pool }));

app.get('/api/admin/routes', require('./routes/admin/routes.js')({ pool }));
app.get('/api/admin/resource_site_categories', require('./routes/admin/resource-site-categories/get.js')({ pool }));
app.get('/api/admin/resource_sites/:type_id', require('./routes/admin/resource-sites/get.js')({ pool }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});
