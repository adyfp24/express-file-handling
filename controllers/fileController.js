const path = require('path');
const File = require('../models').FileUpload;

const getAllFiles = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getFile = async (req, res) => {
    const id = req.params.id;
    const fileName = await File.findOne({where : {id}}); 
    const filePath = path.join(__dirname, '../uploads', fileName.file_path);
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