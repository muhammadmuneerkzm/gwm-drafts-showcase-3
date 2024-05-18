import connectDb from "../../../middleware/mongoose";
import Order from "../../../models/Order";
const jwt = require('jsonwebtoken')

export async function POST(request) {

    await connectDb();
    const body = await request.json();
    const {token} = body
    const data =  jwt.verify(token, "jwtsecret")
    console.log(token)
    console.log(data)
    let orders = await Order.find({email : data.email})
    console.log(orders)
    return Response.json({orders})
}
