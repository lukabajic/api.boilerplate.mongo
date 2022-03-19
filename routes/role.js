const express = require('express');

const roleController = require('../controllers/role');
const permissions = require('../middlewares/permissions');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.post('/create', isAuth, permissions(1, 2), roleController.create);

router.get('/get/:id', isAuth, permissions(1, 2), roleController.get);

router.get('/get-all', isAuth, permissions(1, 2), roleController.getAll);

router.put('/edit/:id', isAuth, permissions(1, 2), roleController.edit);

router.delete('/delete/:id', isAuth, permissions(1, 2), roleController.delete);

module.exports = router;
