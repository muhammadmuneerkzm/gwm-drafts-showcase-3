import connectDb from "../../../middleware/mongoose";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
const jwt = require("jsonwebtoken")

export async function POST(request) {
    await connectDb()
    console.log("HELLO")
    const body = await request.json();
    let {token, orderId} = body
    let data = jwt.verify(token, process.env.JWT_SECRET)
    
    if(data){
        let order = await Order.findOne({email: data.email, orderId})
        // console.log("ORDER: ",order)
        if(order){
            return Response.json({success: true, order})
        }
        else{
            return Response.json({success: false, logged: true})
        }
    }
    else{
        return Response.json({success: false, logged: false})
    }

  }


  
    