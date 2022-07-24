const { Router } = require('express');

const userController = require('../controllers/userController');
const validateToken = require('../middleware/validateToken');

const router = Router();

router.post('/', userController.create);

router.use(validateToken);

router.get('/', userController.list);
router.get('/:id', userController.findById);

module.exports = router;
