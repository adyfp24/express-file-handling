const multer = require('multer');
const timestamp = Date.now();
const date = new Date(timestamp);
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = formattedDate + '-' + file.originalname;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})

const fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Hanya file JPG dan PNG yang diperbolehkan!'), false);
    }
  };
module.exports = {
    storage,
    fileFilter
};