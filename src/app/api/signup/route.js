
import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User"
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")


export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const code = Math.floor(1000 + Math.random() * 9000);
    console.log("BODY", body)
    console.log(
        jwt.verify(process.env.AES_SECRET, jwt.verify(process.env.AES_JWT_SECRET, process.env.JWT_PASSKEY_SECRET)['key'])['key'] 
        )
    const {name , email } = body;
    let u = new User({
      name ,
      email ,  
      password : jwt.sign({LockedPass: CryptoJS.AES.encrypt(body.password, jwt.verify(process.env.AES_SECRET, jwt.verify(process.env.AES_JWT_SECRET, process.env.JWT_PASSKEY_SECRET)['key'])['key']).toString()} , process.env.JWT_PASSAUTH_LOCK),
      verified: false,
      code: jwt.sign({code}, process.env.JWT_CODEPASS_SECRET)
    
  });
    u.save()
    console.log("body")
    let emailBody = `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center;">
    
      <h1 style="color: #333333; margin-bottom: 5px;">SMOZ</h1>
      <h2 style="color: #888888; margin-top: 5px;">Email Verification</h2>
    <p>Thank you for signing up with SMOZ. To activate your account, Please Use the code below.</p>
      <p>Your verification code is:</p>
    
      <p style="font-size: 24px; margin-top: 10px;"><strong>${code}</strong></p>
   
      <p style="margin-top: 20px;"><strong>If you did not sign up for an account with SMOZ, please ignore this email</strong></p>
      <p>We're grateful to have you with us. Thank you for joining our community!</p>
      <div style="background-color: #343a40; color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 30px;">
        <p>Step into sophistication with us!</p>
      </div>
    
      <div style="margin-top: 30px; text-align: center; color: #888888; font-size: 14px;">
        <p><b>Company Name</b><br>
        123 Main Street, Cityville, Country<br>
        Email: support@smoz.com | Phone: +1 (555) 123-4567</p>
      </div>
    </div>
    </div>
    `;

    let res = await fetch("http://localhost:3000/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        RecieverEmail: email,
        fromTitle: "Smoz",
        mailTitle: "Verify Your Email",
        emailBody
      })
    }) 
    return Response.json({ success: "success"});
  } catch (error) {
    console.error('Error processing the request:', error);
    return Response.json({success:false});
  }
}

// DOCUMENTATION : https://www.slingacademy.com/article/next-js-route-handlers-extract-request-body/


