module.exports = (options = {}) => {
  const { pool, jwt, secret } = options;

  return (req, res, next) => {
    const sql = `
      SELECT *
      FROM users u
      JOIN user_roles ur
      ON u.role_id = ur.id
      WHERE u.username = ?
      AND u.password = ?
    `;

    // TODO: Is there any way to invalidate token when deleted manually from storage??
    pool.query(sql, [req.body.username, req.body.password], (err, result) => {
      if (err) next(err);

      if (result.length > 0) {
        const [user] = result;
        const token = jwt.sign({
          id: user.id,
          username: user.username,
          permissions: {
            delete: user.delete,
            get: user.get,
            post: user.post,
            put: user.put,
          },
        }, secret, { expiresIn: '10m' });

        res.status(200).json({ token });
      } else {
        res.status(401).json({ msg: 'Cannot find username/password combination.' });
      }
    });
  };
};
