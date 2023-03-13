const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    }, 
    descricao: {
        type: String,
    },
    preco: {
        type: Number,
    }
})
    
const Product = mongoose.model('products', ProductSchema, 'products')


module.exports = Product;