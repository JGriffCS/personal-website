module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    console.log(req);
    const sql = `
      SELECT *
      FROM users u
      JOIN user_roles ur
      ON u.role_id = ur.id
      WHERE u.username = ?
      AND u.password = ?
    `;

    conn.query(sql, [req.body.username, req.body.password], (err, result) => {
      if (err) next(err);

      res.json(result);
    });
  }
};