import connectDb from "../../../middleware/mongoose";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
const jwt = require("jsonwebtoken")

export async function POST(request) {
    const body = await request.json();
    try {
        let data = jwt.verify(body.token, process.env.JWT_AUTH_SECRET)
        if(data){
            return Response.json({success: true, email: data.email, name: data.name})
        }
        else{
            return Response.json({success: false})
        }
    } catch (error) {
        console.log(process.env.JWT_AUTH_SECRET)
        return Response.json({success: false})
    }

  }


  
    