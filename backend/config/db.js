import mongoose from "mongoose";

 export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://sohambose:sohambose8080@cluster0.27wj9qh.mongodb.net/food-order").then(()=>console.log("DB Connected"))
    } catch (error) {
        console.log(error)
    }
    
}