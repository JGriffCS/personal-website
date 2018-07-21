module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res, next) => {
    const sql = `
      SELECT id, path, name
      FROM admin_resource_site_categories
    `;

    pool.query(sql, (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  };
};
