module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res) => {
    const sql = `
      INSERT INTO admin_resource_site_categories (value, name, icon) 
      VALUES (?, ?, ?)
    `;

    pool.getConnection((err, conn) => {
      conn.query(sql, [req.body.path, req.body.name, req.body.icon], (postErr) => {
        if (postErr) res.status(500).send({ msg: postErr.sqlMessage });

        conn.query('SELECT * FROM admin_resource_site_categories WHERE id = LAST_INSERT_ID() LIMIT 1', (getErr, result) => {
          conn.release();

          if (getErr) res.json({ msg: getErr.sqlMessage });

          if (result.length === 1) {
            res.status(200).json(result);
          } else {
            res.status(500).json({ msg: 'Something went wrong!' });
          }
        });
      });
    });
  };
};
