"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserBiodata, {
        foreignKey: "userId",
      });

      User.hasMany(models.Produk, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      publicId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
    }
  );
  return User;
};