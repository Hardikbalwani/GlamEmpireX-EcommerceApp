import Cart from '../models/Cart.js'

// ADD TO CART
export const addToCart = async (req, res) => {
    try {
        
        const { productId, quantity = 1 } = req.body

        
        const userId = req.user._id

       
        let cart = await Cart.findOne({ user: userId })

        if (!cart) {
           
            cart = new Cart({
                user: userId,
                items: [{ product: productId, quantity }]
            })
        } else {
            
            const itemIndex = cart.items.findIndex(
                (item) => item.product.toString() === productId
            )

            if (itemIndex > -1) {
                
                cart.items[itemIndex].quantity += quantity
            } else {
                cart.items.push({ product: productId, quantity })
            }
        }

        
        await cart.save()

        await cart.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Item added to cart',
            cart
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error adding to cart',
            error
        })
    }
}

// GET CART
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id })
            .populate('items.product') 

    
        if (!cart) {
            return res.status(200).send({
                success: true,
                cart: { items: [] }
            })
        }

        res.status(200).send({ success: true, cart })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error fetching cart',
            error
        })
    }
}

// REMOVE ITEM FROM CART
export const removeFromCart = async (req, res) => {
    try {
    
        const { productId } = req.params

        const cart = await Cart.findOne({ user: req.user._id })
        if (!cart) {
            return res.status(404).send({ message: 'Cart not found' })
        }

        cart.items = cart.items.filter(
            (item) => item.product.toString() !== productId
        )

        await cart.save()
        await cart.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Item removed from cart',
            cart
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error removing item',
            error
        })
    }
}

// UPDATE QUANTITY
export const updateQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body

        const cart = await Cart.findOne({ user: req.user._id })

        const item = cart.items.find(
            (item) => item.product.toString() === productId
        )

        if (!item) {
            return res.status(404).send({ message: 'Item not found in cart' })
        }

        item.quantity = quantity


        if (item.quantity <= 0) {
            cart.items = cart.items.filter(
                (i) => i.product.toString() !== productId
            )
        }

        await cart.save()
        await cart.populate('items.product')

        res.status(200).send({
            success: true,
            message: 'Quantity updated',
            cart
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error updating quantity',
            error
        })
    }
}