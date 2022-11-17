const Model = require("../models");

exports.AddDepartment = (data) => {
  return Model.DepartmentModel.create(data);
};

//Using hasOne Method
Model.userModel.hasOne(Model.DepartmentModel, { foreignKey: "userId" });
exports.getuserHasOne=(data)=>{
  return Model.userModel.findAll({
    attributes:["userId","name","age","gender","address"],
    include:[ {
      model: Model.DepartmentModel,
      attributes: ["DeptName", "location"],
    },]
  })
}

//Using belomgsTo Method

Model.DepartmentModel.belongsTo(Model.userModel,{foreignKey:"userId"})
exports.getuserByBelongsTo=(data)=>{
  return Model.DepartmentModel.findAll({
    attributes: ["DeptName", "location"],
    include:[ {
      model: Model.userModel,
      attributes:["userId","name","age","gender","address"],
    },]
  })
}