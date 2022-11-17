const Model = require("../models");

exports.addCustomer = (data) => {
  return Model.customerModel.create(data);
};

exports.getuser=(data)=>{
  return Model.customerModel.findAll()
}