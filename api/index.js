import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB is connected!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

// server accepts json as input
app.use(express.json());

app.listen(3002,()=> {
    console.log('Server is running on port 3002!')
});

app.use("/api/user", userRoutes);
app.use('/api/auth', authRouter);

//add Middleware to Express app for system's error handling

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});