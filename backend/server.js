import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cartRoutes from './routes/cartRoute.js'
import productRoutes from './routes/productRoute.js'
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "https://glam-empire-x-ecommerce-app.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json())
app.use(morgan('dev'))



app.use('/api/v1/auth/', authRoutes)
app.use('/api/v1/cart/', cartRoutes)
app.use('/api/v1/products/', productRoutes)

app.get('/', (req,res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})