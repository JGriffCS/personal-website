module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
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

    conn.query(sql, values, (err) => {
      if (err) return res.status(500).send({ msg: err.sqlMessage });

      conn.query('SELECT * FROM admin_resource_sites WHERE id = LAST_INSERT_ID() LIMIT !', (err, result) => {
        if (err) res.json({ msg: err.sqlMessage });

        if (result.length === 1) {
          res.status(200).json(result);
        } else {
          res.status(500).json({ msg: 'Something went wrong!' });
        }
      });
    });
  };
};