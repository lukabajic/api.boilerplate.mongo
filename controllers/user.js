const User = require('../models/user');
const { catchError, throwError } = require('../utils/errors');

exports.create = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    if (!user) throwError('user_NOT_CREATED', 400);

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.get = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) throwError('user_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throwError('userS_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      users,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.edit = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) throwError('user_NOT_FOUND', 404);
    Object.assign(user, req.body);
    await user.save();

    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    catchError(res, err);
  }
};
