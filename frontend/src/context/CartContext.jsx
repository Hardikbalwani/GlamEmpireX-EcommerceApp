import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useAuth } from "./auth"
import axios from "axios"

const CartContext = createContext()

const API = process.env.REACT_APP_API || '';

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({ items: [] })
    const { auth } = useAuth()

    const fetchCart = useCallback(async () => {
        try {
            const { data } = await axios.get(`${API}/api/v1/cart`, {
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

    useEffect(() => {
        if (auth?.token) {
            fetchCart()
        } else {
            setCart({ items: [] })
        }
    }, [auth?.token, fetchCart])

    const addToCart = async (productId, quantity = 1) => {
        try {
            const { data } = await axios.post(
                `${API}/api/v1/cart/add`,
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

    const removeFromCart = async (productId) => {
        try {
            const { data } = await axios.delete(
                `${API}/api/v1/cart/remove/${productId}`,
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

    const updateQuantity = async (productId, quantity) => {
        try {
            const { data } = await axios.put(
                `${API}/api/v1/cart/update`,
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