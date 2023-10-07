const logRequest = (req, res, next) => {
  console.log("log terjadi requset ", req.path);
  next();
};

module.exports = logRequest;

