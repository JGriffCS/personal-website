module.exports = (options = {}) => {
  const { conn, jwt, secret } = options;

  return (req, res, next) => {
    const sql = `
      INSERT INTO admin_resource_site_categories (value, name, icon) 
      VALUES (?, ?, ?)
    `;

    conn.query(sql, [req.body.value, req.body.name, req.body.icon], (err, result) => {
      if (err) return res.status(500).send({ msg: err.sqlMessage });

      conn.query('SELECT * FROM admin_resource_site_categories WHERE id = LAST_INSERT_ID()', (err, result) => {
        if (err) res.json({ msg: err.sqlMessage });

        if (result) {
          res.status(200).json(result);
        } else {
          res.status(200);
        }
      });
    });
  }
};