// 'use client'
import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User";
// const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js");

export async function POST(request) {
    const body = await request.json();
    let {password , newPassword } = body.data
    let user = await User.findOne({email: body.email})
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET)
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if(password == decryptedPass){
        await User.findOneAndUpdate({email: body.email}, {
        password : CryptoJS.AES.encrypt(newPassword, process.env.AES_SECRET).toString()
    })
        return Response.json({success: true, message: "Password Updated Successfully!"})
    } else{
        return Response.json({success: false, message:"Wrong Password Entered!"})
    }

  }


  
    