const path = require('path');
const File = require('../models').FileUpload;

const getFile = (req, res) => {
    const fileName = 'file-1707660058995-Frame 4.png'; 
    const filePath = path.join(__dirname, '../uploads', fileName);
    
    return res.download(filePath, fileName, (err)=>{
        if(err){
            res.status(404).send('file gagal diunduh');
        }
    });
}

const uploadFile = async (req, res) => {
    try {
        const fileName = req.file.filename;
        const data = {
            file_name : req.file.originalname,
            file_type : req.file.mimetype,
            file_path : fileName
        };
        const newFile = await File.create(data);
        return res.status(200).json({
            success: true,
            message: "file berhasil di upload",
            data: newFile
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error : error
        })
    }
}

module.exports = {
    getFile,
    uploadFile
}