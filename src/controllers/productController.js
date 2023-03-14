const repository = require('../repositories/ProductRepository');

exports.get = async (req, res) => {
    try{
     const products = await repository.list();

     return res.status(200).send(products);
    } catch(err){
        return res.status(500).send({message: 'Falha ao carregar os produtos'});
    }
}

exports.post = async (req, res) => {
    try{
        console.log(req.body)
        const response = await repository.create(req.body);
        return res.status(200).send(response)
        
    } catch(err){
        return res.status(500).send("Falha")
    }
}

// exports.get = async (req, res) => {
//     try{
//         const id = req.params.id;
//         const product = await repository.findById(req.params.id);
//         return res.status(200).send(product)
//     } catch(err){
//           return res.status(500).send({message: 'Falha ao carregar o produto'});
//      }
// }
