function checkData(req, res, next, information) {
  if (information[0] != null) {
    next();
  }
}

module.exports = checkData;
