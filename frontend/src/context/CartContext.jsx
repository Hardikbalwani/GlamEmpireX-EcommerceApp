import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useAuth } from "./auth"
import axios from "axios"

// Step 1: Create the empty cart memory box
const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({ items: [] })
    const { auth } = useAuth()

    // Step 3: Get cart from backend
    const fetchCart = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/v1/cart', {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            })
            if (data?.success) {
                setCart(data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }, [auth?.token])

    // Step 2: Every time user logs in, fetch their cart from backend
    useEffect(() => {
        if (auth?.token) {
            fetchCart()
        } else {
            setCart({ items: [] })
        }
    }, [auth?.token, fetchCart])

    // Step 4: Add item to cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const { data } = await axios.post(
                '/api/v1/cart/add',
                { productId, quantity },
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setCart(data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Step 5: Remove item from cart
    const removeFromCart = async (productId) => {
        try {
            const { data } = await axios.delete(
                `/api/v1/cart/remove/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setCart(data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Step 6: Update quantity
    const updateQuantity = async (productId, quantity) => {
        try {
            const { data } = await axios.put(
                '/api/v1/cart/update',
                { productId, quantity },
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setCart(data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Step 7: Count total items in cart
    const cartCount = cart?.items?.reduce(
        (total, item) => total + item.quantity, 0
    ) || 0

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }