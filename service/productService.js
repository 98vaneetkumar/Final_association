const Model = require("../models");

exports.addProduct = (data) => {
  return Model.prodcutModel.create(data);
};

exports.getProduct=(data)=>{
  return Model.prodcutModel.findAll()
}