const Service = require("../service");

module.exports = {
  AddProduct: async (data) => {
    let Productdata = {
      Product_Name: data.Product_Name,
      Product_Price: data.Product_Price,
      Product_Manufacturing_Country: data.Product_Manufacturing_Country,
    };
    let Product = await Service.productService.addProduct(Productdata);
    if (Product) {
      return {
        status: "Success",
        message: "Add Product successfull",
        Product: Product,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add Product ",
        Product: Product,
      };
    }
  },
  get: async (data) => {
    const Product = await Service.productService.getProduct();
    if (Product) {
      return {
        status: "Success",
        Product: Product,
      };
    }
  },
};
