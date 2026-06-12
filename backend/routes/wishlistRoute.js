import express from 'express'
import {
    addToWishlist,
    getWishlist,
    removeFromWishlist,
    moveToCart
} from '../controllers/wishlistController.js'
import { requireSignIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', requireSignIn, getWishlist)

router.post('/add', requireSignIn, addToWishlist)

router.delete('/remove/:productId', requireSignIn, removeFromWishlist)

router.post('/move-to-cart', requireSignIn, moveToCart)

export default router