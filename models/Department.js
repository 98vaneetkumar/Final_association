const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const Department = sequelize.define(
  "department",
  {
    DeptID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    DeptName: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "userId",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Department;
