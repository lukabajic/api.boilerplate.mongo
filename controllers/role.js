const Role = require('../models/Role');
const { catchError, throwError } = require('../utils/errors');

exports.create = async (req, res) => {
  const { password, ...rest } = req.body;
  try {
    const pw = await bcrypt.hash(password, 12);
    const role = await new Role({ rest, password: pw }).save();
    if (!role) throwError('ROLE_NOT_CREATED', 400);

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.get = async (req, res) => {
  try {
    const role = await Role.findOne({ _id: req.params.id });
    if (!role) throwError('ROLE_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const roles = await Role.find();
    if (!roles) throwError('ROLES_NOT_FOUND', 404);

    res.status(200).json({
      statusCode: 200,
      roles,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.edit = async (req, res) => {
  try {
    const role = await Role.findOne({ _id: req.params.id });
    if (!role) throwError('ROLE_NOT_FOUND', 404);
    Object.assign(role, req.body);
    await role.save();

    res.status(200).json({
      statusCode: 200,
      role,
    });
  } catch (err) {
    catchError(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Role.deleteOne({ _id: req.params.id });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    catchError(res, err);
  }
};
