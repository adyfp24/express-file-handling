

const getFile = (req, res) => {
    return res.status(200).json({
        success: true,
        message: "ini get file route"
    })
}

const uploadFile = () => {

}

module.exports = {
    getFile,
    uploadFile
}