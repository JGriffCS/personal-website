module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    const sql = `
      DELETE FROM admin_resource_sites
      WHERE id = ? 
    `;

    conn.query(sql, [req.params.site_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  };
};