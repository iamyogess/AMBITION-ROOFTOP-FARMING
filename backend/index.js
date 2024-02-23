import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./configs/connectDB.js";
import userRoute from "./routes/user.route.js"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//db configure
connectDB();

//API ROUTES
app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})