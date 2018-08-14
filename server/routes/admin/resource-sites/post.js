module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res) => {
    const sql = `
      INSERT INTO admin_resource_sites (site_category_id, name, image_url, link)
      VALUES (?, ?, ?, ?)
     `;

    const values = [
      req.body.site_category_id,
      req.body.name,
      req.body.image_url,
      req.body.link,
    ];

    pool.getConnection((err, conn) => {
      conn.query(sql, values, (postErr) => {
        if (postErr) res.status(500).send({ msg: postErr.sqlMessage });

        conn.query('SELECT * FROM admin_resource_sites WHERE id = LAST_INSERT_ID() LIMIT 1', (getErr, result) => {
          conn.release();

          if (getErr) res.json({ msg: getErr.sqlMessage });

          if (result.length === 1) {
            res.status(200).json(result);
          }

          res.status(500).json({ msg: 'Something went wrong!' });
        });
      });
    });
  };
};
