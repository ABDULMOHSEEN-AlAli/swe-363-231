function checkData(req, res, next, { fullName, email, phoneNumber }) {
  next();
}

module.exports = checkData;
