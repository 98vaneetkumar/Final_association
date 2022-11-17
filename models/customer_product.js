const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const customer_product = sequelize.define(
  "customer_product",
  {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
  },
  {
    freezeTableName: true,  
  }
);

module.exports = customer_product;


