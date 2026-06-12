import Wishlist from '../models/Wishlist.js'
import Cart from '../models/Cart.js'

// Add to wishlist
export const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.body
        const userId = req.user._id

        let wishlist = await Wishlist.findOne({ user: userId })

        if (!wishlist) {
            wishlist = new Wishlist({
                user: userId,
                items: [{ product: productId }]
            })
        } else {
            const alreadyExists = wishlist.items.find(
                (item) => item.product.toString() === productId
            )

            if (alreadyExists) {
                return res.status(200).send({
                    success: false,
                    message: 'Item already in wishlist'
                })
            }

            wishlist.items.push({ product: productId })
        }

        await wishlist.save()
        await wishlist.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Item added to wishlist',
            wishlist
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error adding to wishlist',
            error
        })
    }
}

// Get wishlist
export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user._id })
            .populate('items.product')

        if (!wishlist) {
            return res.status(200).send({
                success: true,
                wishlist: { items: [] }
            })
        }

        res.status(200).send({ success: true, wishlist })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error fetching wishlist',
            error
        })
    }
}

// Remove from wishlist
export const removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.params

        const wishlist = await Wishlist.findOne({ user: req.user._id })

        if (!wishlist) {
            return res.status(404).send({ message: 'Wishlist not found' })
        }

        wishlist.items = wishlist.items.filter(
            (item) => item.product.toString() !== productId
        )

        await wishlist.save()
        await wishlist.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Item removed from wishlist',
            wishlist
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error removing from wishlist',
            error
        })
    }
}

// Move to cart (remove from wishlist + add to cart)
export const moveToCart = async (req, res) => {
    try {
        const { productId } = req.body
        const userId = req.user._id

        // 1. Remove from wishlist
        const wishlist = await Wishlist.findOne({ user: userId })
        if (wishlist) {
            wishlist.items = wishlist.items.filter(
                (item) => item.product.toString() !== productId
            )
            await wishlist.save()
        }

        // 2. Add to cart
        let cart = await Cart.findOne({ user: userId })

        if (!cart) {
            cart = new Cart({
                user: userId,
                items: [{ product: productId, quantity: 1 }]
            })
        } else {
            const itemIndex = cart.items.findIndex(
                (item) => item.product.toString() === productId
            )

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += 1
            } else {
                cart.items.push({ product: productId, quantity: 1 })
            }
        }

        await cart.save()
        await cart.populate('items.product')
        await wishlist.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Item moved to cart',
            cart,
            wishlist
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error moving to cart',
            error
        })
    }
}