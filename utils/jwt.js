const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config');

exports.generateToken = ({ _id, role }) => {
  const token = jwt.sign({ _id, role }, jwtSecret);
  return token;
};
