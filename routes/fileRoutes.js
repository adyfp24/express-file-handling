const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const upload = require('../middlewares/fileMiddleware');

router.get('/file', fileController.getAllFiles);
router.get('/file/:id', fileController.getFile);
router.post('/file', upload.single('file'), fileController.uploadFile);


module.exports = router;

