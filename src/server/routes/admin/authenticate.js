module.exports = (options = {}) => {
  const { conn, jwt, secret } = options;

  return (req, res, next) => {
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

      if (result.length > 0) {
        const [user] = result;
        const token = jwt.sign({ user }, secret, { expiresIn: '10m' })

        res.status(200).json({ token });
      } else {
        res.status(401).json({ msg: 'Cannot find username/password combination.' });
      }
    });
  }
};