import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes'
import dialogflowRoutes from './routes/dialogflowRoutes';
import { errorHandler } from './utils/errorHandler';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/dialogflow', dialogflowRoutes);

app.use('/', (req: Request, res: Response) => {
    res.json('Welcome to my shopping app ');
})

// Global error handler
app.use(errorHandler);

const PORT: string | number = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
