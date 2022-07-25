const { Router } = require('express');

const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');

const router = Router();

router.use(validateToken);

router.post('/', postController.create);
router.get('/', validateToken, postController.list);

module.exports = router;
