'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileUpload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FileUpload.init({
    fileName: DataTypes.STRING,
    fileType: DataTypes.STRING,
    filePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FileUpload',
  });
  return FileUpload;
};