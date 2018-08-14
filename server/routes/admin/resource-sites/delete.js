module.exports = (options = {}) => {
  const { pool } = options;

  return (req, res, next) => {
    const sql = `
      DELETE FROM admin_resource_sites
      WHERE id = ? 
    `;

    pool.query(sql, [req.params.site_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  };
};
