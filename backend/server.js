import express from"express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";


//app config
const app = express();
const PORT = 4000

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);


app.get("/",(req,res)=>{
    res.send("API Working");
});

app.listen(PORT,()=>{
    console.log(`Server is started on http://localhost:${PORT}`);
});

//mongodb+srv://subhostack:8276958492@cluster0.ilecx.mongodb.net/?

