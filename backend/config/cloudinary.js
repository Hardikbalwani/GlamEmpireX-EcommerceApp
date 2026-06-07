import cloudinary from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

// connect to your cloudinary account
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// tell multer to store files in cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
        folder: 'glamempirex',  // folder name in cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png', 'avif', 'webp']
    }
})

// this is what we use in routes
export const upload = multer({ storage })
export default cloudinary