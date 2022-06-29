"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StatusNotificationDetail extends Model {
    static associate(models) {}
  }
  StatusNotificationDetail.init(
    {
      description: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "StatusNotificationDetail",
      tableName: "StatusNotificationDetails",
    }
  );
  return StatusNotificationDetail;
};
