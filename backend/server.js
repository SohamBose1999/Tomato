import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})



//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)



app.listen(port,()=>{
    //db connection
    connectDB()
    console.log(`Server Started on http://localhost:${port}`)
})

