// 'use client'
import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User";
const jwt = require("jsonwebtoken")

export async function POST(request) {
    connectDb()
    const body = await request.json();
    const {email} = body
    let user = await User.findOne({email})
    if(user){
        let {name , address, phone, city, state, pincode} = user
        user = {name,address,city,phone,state,pincode,email}
        console.log(user)    
        return Response.json({success: true, user: user})
    }
    else{
        return Response.json({success: false})
    }

  }


  
    