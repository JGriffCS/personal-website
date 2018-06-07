module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    const sql = `
      DELETE FROM admin_resource_site_categories
      WHERE id = ?
    `;

    conn.query(sql, [req.params.categoryId], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
};
