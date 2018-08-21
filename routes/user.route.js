const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.all);
router.post('/create', userController.create);
router.get('/detail/:id', userController.detail);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;