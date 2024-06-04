import express from "express"
import authMiddleware from "../middleware/auth.js"
import {placeOrder} from "../controllers/orderController.js"

const OrderRouter = express.Router()

OrderRouter.post("/place",authMiddleware,placeOrder)

export default OrderRouter