import express from 'express'
import {
    getProductsController,
    getSingleProductController
} from '../controllers/productController.js'

const router = express.Router()


router.get('/', getProductsController)

router.get('/:id', getSingleProductController)

export default router