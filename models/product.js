const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const Product = sequelize.define(
  "Product",
  {
    ProductID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    Product_Name: {
      type: DataTypes.STRING,
    },
    Product_Price: {
      type: DataTypes.FLOAT,
    },
    Product_Manufacturing_Country:{
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;
