const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const Education = sequelize.define(
  "Education",
  {
    EductionID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    Qualification: {
      type: DataTypes.STRING,
    },
    Percentage: {
      type: DataTypes.FLOAT,
    },
    Board:{
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

module.exports = Education;
