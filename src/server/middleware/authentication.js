const getToken = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  } else if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  }

  return null;
}

module.exports = (options = {}) => {
  const { jwt, secret } = options;

  return (req, res, next) => {
    const token = getToken(req);

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