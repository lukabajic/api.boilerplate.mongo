const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { generateToken } = require('../utils/jwt');
const { throwError, catchError } = require('../utils/errors');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    !user && throwError('USER_NOT_FOUND', 404);
    await bcrypt.compare(password, user.password);
    const token = generateToken(user._id, user.email);

    res.status(200).json({
      statusCode: 200,
      token,
      expiresIn: 14 * 24 * 60 * 60 * 1000,
      user
    });
  } catch (err) {
    catchError(res, err);
  }
};
