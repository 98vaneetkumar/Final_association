const Service = require("../service");


module.exports = {
  AddDepartment: async (data) => {
    let departmentdata = {
      DeptName: data.DeptName,
      location:data.location,
      userId:data.userId
    };
    let department = await Service.departmentSevice.AddDepartment(departmentdata);
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
  getByHasOne: async (data) => {
    const user = await Service.departmentSevice.getuserHasOne();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
  getByBelongsTo: async (data) => {
    const user = await Service.departmentSevice.getuserByBelongsTo();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
};
