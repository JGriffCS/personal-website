module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    sql = `
      SELECT *
      FROM AdminActionItems
      WHERE TypeID = ${req.params.type_id}
    `;

    conn.query(sql, (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
}


