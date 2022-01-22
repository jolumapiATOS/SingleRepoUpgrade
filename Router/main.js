const router = require('express').Router();
const controller = require('../Controllers/mainController.js');

router.post('/user/new', controller.indexPage );
router.post('/message/new', controller.newMessage);
router.get('/', controller.experiment);
router.get('/getMyMessages', controller.getMessages);
router.post('/user/login', controller.login)





module.exports = router;