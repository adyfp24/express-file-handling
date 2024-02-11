const multer = require('multer');
const storage = require('../utils/multerSetup').storage;
const fileFilter = require('../utils/multerSetup').fileFilter;
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;