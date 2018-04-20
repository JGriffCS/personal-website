module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    sql = `
      SELECT *
      FROM AdminActionItems
      WHERE TypeID = ?
    `;

    conn.query(sql, [req.params.type_id], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
}


