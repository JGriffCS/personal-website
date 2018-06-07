module.exports = (options = {}) => {
  const { conn } = options;

  return (req, res, next) => {
    console.log(req.param);
    console.log(req.params);
    // const sql = `
    //   DELETE FROM admin_resource_site_categories
    //   WHERE id = ?
    // `;
    //
    // conn.query(sql, (err, result) => {
    //   if (err) next(err);
    //
    //   res.json(result);
    // });
    next();
  }
};
