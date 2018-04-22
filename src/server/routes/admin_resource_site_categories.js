module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    sql = `
      SELECT *
      FROM AdminResourceSiteCategories
    `;

    conn.query(sql, (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
}


