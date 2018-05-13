module.exports = (options = {}) => {
  const { jwt, secret } = options;

  return (req, res, next) => {
    const token = (req.body ? req.body.token : null) || req.headers['token'];

    if (token) {
      jwt.verify(token, secret, (err, resp) => {
        if (err) {
          res.status(401).send('Invalid Token');
        } else {
          next();
        }
      });
    } else {
      res.status(401).send('No Token Present');
    }
  };
};