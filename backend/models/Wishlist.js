import mongoose from 'mongoose'

const wishlistItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    }
})

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        unique: true
    },
    items: [wishlistItemSchema]

}, { timestamps: true })

export default mongoose.model('Wishlist', wishlistSchema)