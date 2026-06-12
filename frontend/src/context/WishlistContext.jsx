import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useAuth } from "./auth"
import axios from "axios"

const WishlistContext = createContext()

const API = process.env.REACT_APP_API || '';

const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState({ items: [] })
    const { auth } = useAuth()

    const fetchWishlist = useCallback(async () => {
        try {
            const { data } = await axios.get(`${API}/api/v1/wishlist`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            })
            if (data?.success) {
                setWishlist(data.wishlist)
            }
        } catch (error) {
            console.log(error)
        }
    }, [auth?.token])

    useEffect(() => {
        if (auth?.token) {
            fetchWishlist()
        } else {
            setWishlist({ items: [] })
        }
    }, [auth?.token, fetchWishlist])

    const addToWishlist = async (productId) => {
        try {
            const { data } = await axios.post(
                `${API}/api/v1/wishlist/add`,
                { productId },
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setWishlist(data.wishlist)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const removeFromWishlist = async (productId) => {
        try {
            const { data } = await axios.delete(
                `${API}/api/v1/wishlist/remove/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setWishlist(data.wishlist)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const moveToCart = async (productId) => {
        try {
            const { data } = await axios.post(
                `${API}/api/v1/wishlist/move-to-cart`,
                { productId },
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                }
            )
            if (data?.success) {
                setWishlist(data.wishlist)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const isInWishlist = (productId) => {
    return wishlist?.items?.some((item) => {
        const id = item.product?._id || item.product
        return id?.toString() === productId?.toString()
    })
}

    const wishlistCount = wishlist?.items?.length || 0

    return (
        <WishlistContext.Provider value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            moveToCart,
            isInWishlist,
            wishlistCount
        }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist, WishlistProvider }