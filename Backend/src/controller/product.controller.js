
const productService=require("../services/product.service.js");

const createProduct=async(req,res)=>{
    try {
        const product=await productService.createProduct(req.body)
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteProduct=async(req,res)=>{
    try {
        const product=await productService.deleteProduct(req.params.id)
        return res.status(201).send({message:"product deleted sucessfully"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const updateProduct=async(req,res)=>{
    try {
        const product=await productService.updateProduct(req.params.id,req.body)
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findProductById=async(req,res)=>{
    try {
        const product=await productService.findProductById(req.params.id)
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllProducts=async(req,res)=>{
    try {
        const products=await productService.getAllProducts(req.query)
        console.log(".................")
        console.log(products);
        console.log("...................");
        return res.status(200).send(products)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const createMultipleProducts=async(req,res)=>{
    try {
        const product=await productService.createMultipleProducts(req.body)
        return res.status(201).send({message:"products created sucessfully"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    createMultipleProducts,
    createProduct,
    deleteProduct,
    getAllProducts,
    findProductById,
    updateProduct
}


