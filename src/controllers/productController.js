const ProductRepository = require('../repositories/productRepository');

exports.get = async (req, res) => {
    try{
     let products = await ProductRepository.list();

     return res.status(200).send({products});
    } catch(err){
        return res.status(500).send({message: 'Falha ao carregar os produtos'});
    }
}

exports.post = async (req, res) => {
    try{
        console.log(req.body)
        let response = await ProductRepository.create(req.body);
        return res.status(200).send({message: 'Produto cadastrado com sucesso'})
    } catch(err){
        return res.status(500).send("Falha")
    }
}

