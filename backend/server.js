import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
import productRoutes from './routes/product.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());

// Connect to database before starting the server
connectDB();

app.use("/api/products" , productRoutes )

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

