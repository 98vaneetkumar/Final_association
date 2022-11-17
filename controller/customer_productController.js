const Service = require("../service");

module.exports = {
  AddToCartProduct: async (data) => {
    let Productdata = {
      customerCustomerId: data.customerCustomerId,
      ProductProductID: data.ProductProductID,
    };
    let Product = await Service.customer_productService.AddToCartProduct(Productdata);
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
    const Product = await Service.customer_productService.getCustomer_product();
    if (Product) {
      return {
        status: "Success",
        Customer: Product,
      };
    }
  },
  gets: async (data) => {
    const Product = await Service.customer_productService.getCustomer_products();
    if (Product) {
      return {
        status: "Success",
        Product: Product,
      };
    }
  },
};
