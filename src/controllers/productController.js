const repository = require('../repositories/ProductRepository');

exports.get = async (req, res) => {
    try{
     const products = await repository.list();

     return res.status(200).send(products);
    } catch(err){
        return res.status(500).send({message: 'Failed to load products'});
    }
}

exports.post = async (req, res) => {
    try{
        
        const response = await repository.create(req.body);

        return res.status(200).send(response)
        
    } catch(err){
        return res.status(500).send("Falha")
    }
}

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await repository.findById(id);

    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: "Failed to load the product" });
  }
};

exports.findByIdAndUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const update = await repository.findByIdAndUpdate(id, req.body);

    return res.status(200).json({ message: "Product has been updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to update the product" });
  }
};

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const productDeleted = await repository.findByIdAndDelete(id);
        return res.status(200).json({ message: "The product has been successfully deleted" });
    } catch (error) {
        return res.status(500).send({ message: "Failed to delete the product" });
    }
}