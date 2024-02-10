

const getFile = (req, res) => {
    return res.status(200).json({
        success: true,
        message: "ini test route get file",
    })
}

const uploadFile = (req, res) => {
    const fileName = req.file.filename;
    return res.status(200).json({
        success: true,
        message: "ini test route get file",
        data: fileName
    })
}

module.exports = {
    getFile,
    uploadFile
}