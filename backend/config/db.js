import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://subhostack:8276958492@cluster0.ilecx.mongodb.net/foodorderingapp').then(()=>console.log("DB connected"));
}