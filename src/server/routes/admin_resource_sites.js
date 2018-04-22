module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    sql = `
      SELECT *
      FROM admin_resource_sites
      WHERE site_category_id = ?
    `;

    conn.query(sql, [req.params.type_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
}


