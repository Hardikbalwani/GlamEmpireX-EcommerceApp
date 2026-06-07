import express from 'express'
import {
    addToCart,
    getCart,
    removeFromCart,
    updateQuantity
} from '../controllers/cartController.js'
import { requireSignIn } from '../middlewares/authMiddleware.js'

const router = express.Router()


router.get('/', requireSignIn, getCart)

router.post('/add', requireSignIn, addToCart)


router.delete('/remove/:productId', requireSignIn, removeFromCart)


router.put('/update', requireSignIn, updateQuantity)

export default router