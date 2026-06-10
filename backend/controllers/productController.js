import productModel from '../models/productModel.js'


export const getProductsController = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).send({
            success: true,
            products
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error fetching products',
            error
        })
    }
}


export const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        res.status(200).send({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error fetching product',
            error
        })
    }
}