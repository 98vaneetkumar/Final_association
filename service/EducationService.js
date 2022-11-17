const Model = require("../models");

exports.AddEducation = (data) => {
  return Model.EducationModel.create(data);
};


// One to many association

//Using hasMany Method
Model.userModel.hasMany(Model.EducationModel, { foreignKey: "userId" });
exports.getByHasMany=(data)=>{
  return Model.userModel.findAll({
    attributes:["userId","name","age","gender","address"],
    include:[ {
      model: Model.EducationModel,
      attributes: ["Qualification","Board", "Percentage"],
    },]
  })
}


