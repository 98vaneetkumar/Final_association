const Model = require("../models");

exports.AddToCartProduct = (data) => {
  return Model.customer_productModel.create(data);
};


Model.customerModel.belongsToMany(Model.prodcutModel,{ through: 'customer_product' })
Model.prodcutModel.belongsToMany(Model.customerModel,{ through: 'customer_product' })

exports.getCustomer_product=(data)=>{
  return Model.customerModel.findAll({
    include:[
      Model.prodcutModel
    ]
  }) 
} 


exports.getCustomer_products=(data)=>{
  return Model.prodcutModel.findAll({
    include:[
      Model.customerModel
    ]
  })
} 
