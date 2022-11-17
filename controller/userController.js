const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      name: data.name,
      age: data.age,
      gender: data.gender,
      address: data.address,
    };
    let user = await Service.userService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add user successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add user ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.userService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
};
