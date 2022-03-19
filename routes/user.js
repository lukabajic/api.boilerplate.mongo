const express = require('express');

const userController = require('../controllers/user');
const permissions = require('../middlewares/permissions');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.post(
  '/create',
  // isAuth, permissions(1, 2),
  userController.create
);

router.get(
  '/get/:id',
  // isAuth, permissions(1, 2),
  userController.get
);

router.get(
  '/get-all',
  // isAuth, permissions(1, 2),
  userController.getAll
);

router.put(
  '/edit/:id',
  // isAuth, permissions(1, 2),
  userController.edit
);

router.delete(
  '/delete/:id',
  // isAuth, permissions(1, 2),
  userController.delete
);

module.exports = router;
