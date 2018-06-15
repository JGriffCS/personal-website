module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    const sql = `
      INSERT INTO admin_resource_site_categories (value, name, icon) 
      VALUES (?, ?, ?)
    `;

    conn.query(sql, [req.body.value, req.body.name, req.body.icon], (err) => {
      if (err) return res.status(500).send({ msg: err.sqlMessage });

      conn.query('SELECT * FROM admin_resource_site_categories WHERE id = LAST_INSERT_ID() LIMIT 1', (err, result) => {
        if (err) res.json({ msg: err.sqlMessage });

        if (result.length === 1) {
          res.status(200).json(result);
        } else {
          res.status(500).json({ msg: 'Something went wrong!' });
        }
      });
    });
  }
};