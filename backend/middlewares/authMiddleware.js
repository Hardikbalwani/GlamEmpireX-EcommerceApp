import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'


export const requireSignIn = async (req, res, next) => {
    try {
        
        
        
        const token = req.headers.authorization?.split(" ")[1] 
                      || req.headers.authorization

        
        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'No token. Please login first.'
            })
        }

        
        const decode = JWT.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()

    } catch (error) {
        
        console.log(error)
        return res.status(401).send({
            success: false,
            message: 'Invalid or expired token. Please login again.'
        })
    }
}


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