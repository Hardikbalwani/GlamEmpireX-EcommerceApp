import 'dotenv/config'                          // ✅ FIX 1: load .env FIRST before anything else
import mongoose from 'mongoose'                  // ✅ FIX 2: import mongoose
import cloudinary from './config/cloudinary.js'
import path from 'path'
import { fileURLToPath } from 'url'
import productModel from './models/productModel.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const uploadImage = async (filename) => {
    const imagePath = path.join(__dirname, '../frontend/src/images', filename)
    const result = await cloudinary.v2.uploader.upload(imagePath, {
        folder: 'glamempirex'
    })
    return result.secure_url
}

const seedProducts = async () => {
    try {
        // ✅ FIX 3: Connect to MongoDB BEFORE doing anything with the DB
        await mongoose.connect(process.env.MONGO_URL)
        console.log('✅ Connected to MongoDB Atlas')

        await productModel.deleteMany({})
        console.log('🗑️ Old products cleared')

        console.log('📸 Uploading images to Cloudinary...')

        const products = [
            {
                name: 'Essential Oil for Relaxation',
                description: 'A soothing essential oil blend.',
                price: 48.99,
                category: 'Face',
                stock: 50,
                image: await uploadImage('christin-hume-0MoF-Fe0w0A-unsplash.jpg')
            },
            {
                name: 'Flawless Finish Powder',
                description: 'A lightweight finishing powder.',
                price: 38.99,
                category: 'Face',
                stock: 40,
                image: await uploadImage('element5-digital-ceWgSMd8rvQ-unsplash.jpg')
            },
            {
                name: 'Velvet Kiss Lipstick',
                description: 'A rich creamy lipstick.',
                price: 68.99,
                category: 'Lips',
                stock: 60,
                image: await uploadImage('joanna-kosinska-mVdzV_HTyH4-unsplash.jpg')
            },
            {
                name: 'Nourishing Hand Lotion',
                description: 'A deeply moisturizing hand lotion.',
                price: 98.99,
                category: 'Face',
                stock: 35,
                image: await uploadImage('pexels-moose-photos-1029896.jpg')
            },
            {
                name: 'Luxe Matte Lipstick',
                description: 'A long lasting matte lipstick.',
                price: 108.99,
                category: 'Lips',
                stock: 45,
                image: await uploadImage('pexels-shiny-diamond-3373738.jpg')
            },
            {
                name: 'Luxe Glass Dropper Bottle',
                description: 'A premium glass dropper bottle.',
                price: 58.99,
                category: 'Eyes',
                stock: 30,
                image: await uploadImage('pexels-alesia-kozik-7797449.jpg')
            },
            {
                name: 'Nourishing Hand Lotion Premium',
                description: 'An upgraded premium hand lotion.',
                price: 78.99,
                category: 'Face',
                stock: 55,
                image: await uploadImage('photo-1586220742613-b731f66f7743.avif')
            },
            {
                name: 'Makeup Brush Set',
                description: 'A professional makeup brush set.',
                price: 68.99,
                category: 'Eyes',
                stock: 25,
                image: await uploadImage('rosa-rafael-pxax5WuM7eY-unsplash.jpg')
            }
        ]

        const inserted = await productModel.insertMany(products)
        console.log(`✅ ${inserted.length} products added with real images!`)

        inserted.forEach((p) => {
            console.log(`${p.name} → _id: ${p._id}`)
            console.log(`  image: ${p.image}`)
        })

        // ✅ FIX 4: Disconnect cleanly after seeding is done
        await mongoose.disconnect()
        console.log('🔌 Disconnected from MongoDB')

        process.exit(0)

    } catch (error) {
        console.log('❌ Error:', error)
        await mongoose.disconnect()
        process.exit(1)
    }
}

seedProducts()