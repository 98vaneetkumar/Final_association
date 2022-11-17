const Service = require("../service");


module.exports = {
  AddCustomer: async (data) => {
    let userdata = {
      Customer_name: data.Customer_name,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      address: data.address,
    };
    let user = await Service.customerService.addCustomer(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add Customer successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add customer ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.customerService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
};
