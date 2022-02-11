const router = require('express').Router();
const controller = require('../Controllers/mainController.js');
const controllerTeacher = require("../Controllers/teacherController.js")

router.post('/user/new', controller.indexPage );
router.post('/message/new', controller.newMessage);
router.get('/', controller.experiment);
router.get('/getMyMessages', controller.getMessages);
router.post('/user/login', controller.login);

router.post( '/postingAllMessages', controller.asyncMessages);

router.get("/getLastAdvance", controllerTeacher.getLastAdvancements);
router.get("/teachers", controllerTeacher.getAllTeachers);





module.exports = router;