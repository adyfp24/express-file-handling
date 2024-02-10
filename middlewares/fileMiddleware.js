const multer = require('multer');
const storage = require('../utils/multerSetup');
const upload = multer({storage: storage});

module.exports = upload;