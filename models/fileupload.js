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
    file_name: DataTypes.STRING,
    file_type: DataTypes.STRING,
    file_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FileUpload',
  });
  return FileUpload;
};