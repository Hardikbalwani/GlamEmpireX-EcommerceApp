import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,  
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0     
    }

}, { timestamps: true })

export default mongoose.model('products', productSchema)