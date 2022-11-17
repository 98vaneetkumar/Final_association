const Service = require("../service");


module.exports = {
    AddEducation: async (data) => {
    let departmentdata = {
      Qualification: data.Qualification,
      Percentage:data.Percentage,
      Board:data.Board,
      userId:data.userId
    };
    let department = await Service.educationService.AddEducation(departmentdata);
    if (department) {
      return {
        status: "Success",
        message: "Add department successfull",
        department: department,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add department ",
      };
    }
  },
  getByHasMany: async (data) => {
    const user = await Service.educationService.getByHasMany();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
 
};
