module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res, next) => {
    const sql = `
      SELECT *
      FROM admin_resource_sites
      WHERE site_category_id = ?
    `;

    pool.query(sql, [req.params.type_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  };
};
