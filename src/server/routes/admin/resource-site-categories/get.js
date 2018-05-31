module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    const sql = `
      SELECT *
      FROM admin_resource_site_categories
    `;

    conn.query(sql, (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
};
