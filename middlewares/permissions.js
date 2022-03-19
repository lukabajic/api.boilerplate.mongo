const { throwError, catchError } = require('../utils/errors');

module.exports =
  (...roles) =>
  (req, res, next) => {
    try {
      if (!roles) next();

      const allowed = roles.includes(req.role);
      !allowed && throwError('NOT_PERMITED', 401);

      next();
    } catch (err) {
      catchError(res, err);
    }
  };
