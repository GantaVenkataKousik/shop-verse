import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import path from 'path';
import crypto from 'crypto';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import ecommerceRoute from './routes/ecommerceRoute.js';
import adminRoute from './routes/adminRoute.js';

const PORT = 9002

const MODE = "development"


//intailising expresss
const app = express();

//middlewares
// Enables Cross-Origin Resource Sharing for your server.
app.use(cors());
// Parses JSON data in incoming requests.
app.use(express.json());
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));


dotenv.config();

//database Config
connectDB();

app.use("/api/v1/auth",authRoute); 

app.use("/api/v2/ecommerce",ecommerceRoute);

app.use("/api/v3/admin",adminRoute);



app.listen(PORT,() => {
    console.log(`Server running on ${MODE} Mode on the Port ${PORT}`.bgBlue);
})