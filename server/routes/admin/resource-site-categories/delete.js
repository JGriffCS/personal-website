module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res, next) => {
    const sql = `
      DELETE FROM admin_resource_site_categories
      WHERE id = ?
    `;

    pool.query(sql, [req.params.category_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  };
};
