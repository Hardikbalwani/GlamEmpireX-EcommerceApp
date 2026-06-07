import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
        // ----- FIX 1: Handle "Bearer token" format -----
        // frontend sends: "Bearer eyJhbGci...."
        // we split by space and take only the token part
        const token = req.headers.authorization?.split(" ")[1] 
                      || req.headers.authorization

        // ----- FIX 2: If no token at all, block immediately -----
        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'No token. Please login first.'
            })
        }

        // verify the token
        const decode = JWT.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()

    } catch (error) {
        // ----- FIX 3: Always send a response on error -----
        console.log(error)
        return res.status(401).send({
            success: false,
            message: 'Invalid or expired token. Please login again.'
        })
    }
}

// Admin access — no changes needed here, this is fine
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorised Access'
            })
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware'
        })
    }
}