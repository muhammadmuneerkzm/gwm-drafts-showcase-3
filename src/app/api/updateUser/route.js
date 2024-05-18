// 'use client'
import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User";
// const jwt = require("jsonwebtoken")

export async function POST(request) {
    const body = await request.json();
    let {email , data } = body
    const {name, address, pincode , phone, state, city} = data
    console.log(data)
    await User.findOneAndUpdate({email: email}, {
        address,
        pincode,
        phone,
        state,
        city,
        name
    })
    if(data){
        return Response.json({success: true, email: data.email})
    }
    else{
        return Response.json({success: false})
    }

  }


  
    