const Product = require("../Models/ProductModel");
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

exports.findById = async (id) => { 
  try { 
    var products = await Product.findById(id);
    return products;
  } catch (err) {
    return undefined;
  }
}

exports.findByIdAndUpdate = async (id, data) => {
  try {
    var updates = await Product.findByIdAndUpdate(id, data);
    return updates;
    
  } catch (error) {
    return undefined;
  }
}

exports.findByIdAndDelete = async (id) => {
  try {
    var productDeleted = await Product.findByIdAndDelete(id);
    return productDeleted;
  } catch (error) {
    return undefined;
  }
}