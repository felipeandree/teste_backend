const ProductModel = require("../Models/ProductModel");

exports.list = async () => {
  try {
    let products = await ProductModel.find({});
    return products;
  } catch (err) {
    return undefined;
  }
};

exports.create = async (data) => {
  try {
    var response = await ProductModel.create(data);
    return response;
  } catch (err) {
    return undefined;
  }
};

// exports.findById = async (id) => {
//     try {
//         let product = await ProductModel.find({});
//         return product;
//     } catch (err) {
//         return undefined;
//     }
// }

