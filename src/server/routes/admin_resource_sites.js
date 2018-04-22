module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    sql = `
      SELECT *
      FROM AdminResourceSites
      WHERE SiteCategoryID = ?
    `;

    conn.query(sql, [req.params.type_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
}


