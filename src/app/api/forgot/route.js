// 'use client'
import { json } from "stream/consumers";
import connectDb from "../../../middleware/mongoose";
import Forgot from "../../../models/Forgot";
import User from "../../../models/User";
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
export async function POST(request) {
  await connectDb()
  const body = await request.json();
  if (body.sendmail) {

    // check if the email exists in the database
    console.log(body)
    let { email } = body
    let user = await User.findOne({ email })
    console.log(user)
    if (user) {
      let passkey = generatePasskey();
      console.log(passkey)
      let token = jwt.sign({ email, passkey }, process.env.JWT_EMAIL_SECRET)
      console.log(token)

      console.log(passkey)
      let f = new Forgot({
        email,
        token,
        passkey
      })

      await f.save()

//       let emailBody = `
//   <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

//   <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center;">

//   <h1 style="color: #333333; margin-bottom: 5px;">SMOZ</h1>
//   <h2 style="color: #888888; margin-top: 5px;">Reset Your Password</h2>

//   <p style="margin-top: 20px;">We've received a request to reset your password on smoz. To proceed, click the button below:</p>
  
//   <a href="http://localhost:3000/forgot?token=${token}" style="display: inline-block; padding: 12px 25px; font-size: 16px; text-align: center; text-decoration: none; background: linear-gradient(to right, #4CAF50, #2E8B57); color: #ffffff; border-radius: 25px; margin-top: 20px;">Reset Password</a>
  

//   <p style="margin-top: 20px;">Keep your password safe and private. If you think it's compromised, change it on your Smoz my account Page.
//   </p>
//   <div style="background-color: #343a40; color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 30px;">
//     <p>Thank you for being a family member of Smoz!</p>
//   </div>

//   <div style="margin-top: 30px; text-align: center; color: #888888; font-size: 14px;">
//     <p><b>Company Name</b><br>
//     123 Main Street, Cityville, Country<br>
//     Email: support@smoz.com | Phone: +1 (555) 123-4567</p>
//   </div>
// </div>
// </div>

//   `

let emailBody = `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center;">

  <h1 style="color: #333333; margin-bottom: 5px;">SMOZ</h1>
  <h2 style="color: #888888; margin-top: 5px;">Reset Your Password</h2>

  <p style="margin-top: 20px;">We've received a request to reset your password on Smoz. To proceed, click the button below:</p>
  
  <a href="http://localhost:3000/forgot?token=${token}" style="display: inline-block; padding: 12px 25px; font-size: 16px; text-align: center; text-decoration: none; background: linear-gradient(to right, #4CAF50, #2E8B57); color: #ffffff; border-radius: 25px; margin-top: 20px;">Reset Password</a>

  <p style="margin-top: 20px;">Keep your password safe and private. If you think it's compromised, change it on your Smoz My Account Page.</p>
  <div style="background-color: #343a40; color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 30px;">
    <p>Thank you for being a part of Smoz!</p>
  </div>

  <div style="margin-top: 30px; text-align: center; color: #888888; font-size: 14px;">
    <p><b>Company Name</b><br>
    123 Main Street, Cityville, Country<br>
    Email: support@smoz.com | Phone: +1 (555) 123-4567</p>
  </div>
</div>
</div>
`

      // const transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   port: 465,
      //   secure: true,
      //   auth: {
      //     user: process.env.NODEMAILER_USER,
      //     pass: process.env.NODEMAILER_APP_PASSWORD,
      //   },
      // });

      // const mailOptions = {
      //   from: `"Support - Smoz" <${process.env.NODEMAILER_USER}>`, // sender address
      //   to: email,
      //   subject: "Reset Your Password", // Subject line
      //   // text: "Hello world?", // plain text body
      //   html: emailBody
      // }

      let res = await fetch("http://localhost:3000/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          RecieverEmail: email,
          fromTitle: "Support - Smoz",
          mailTitle: "Reset Your Password",
          emailBody
        })
      }) 

      try {
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent!")
        return Response.json({ success: true, message: "Email Has been Sent!" })
      } catch (error) {
        return Response.json({ success: false, message: "Some Errors Occured" })
      }

    } else {
      return Response.json({ success: false, message: "User doesn't exist!" })
    }


  } else {
    if (body.resetpass) {
      let { token, password } = body;
      let data = jwt.verify(token, process.env.JWT_EMAIL_SECRET)
      let { email } = data
      await User.findOneAndUpdate({ email }, {
        password: CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString()
      })
      return Response.json({ success: true, message: "Password has been successfully updated" })

    } else {
      let { token } = body;
      let data;
      try {
        data = jwt.verify(token, process.env.JWT_EMAIL_SECRET)
      } catch (error) {
        return Response.json({ success: false })
      }
      let { passkey, email } = data
      let forgot = await Forgot.find({ passkey, email, token })
      console.log(forgot)
      console.log("hello from checker")
      if (forgot) {
        return Response.json({ success: true })
      }
      else {
        return Response.json({ success: false })
      }
    }
  }



}



const generatePasskey = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const passkey = Array.from({ length: 25 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  return passkey;
};

