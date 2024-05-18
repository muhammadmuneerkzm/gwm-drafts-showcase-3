// DOCUMENTATION : https://www.slingacademy.com/article/next-js-route-handlers-extract-request-body/// 'use client'
import connectDb from "../../../middleware/mongoose";
import Forgot from "../../../models/Forgot";
import User from "../../../models/User";
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
export async function POST(request) {
  await connectDb()
  const body = await request.json();
  let {RecieverEmail , fromTitle , mailTitle , emailBody} = body
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: `${fromTitle}" <${process.env.NODEMAILER_USER}>`, // sender address
        to: RecieverEmail,
        subject: mailTitle, // Subject line
        // text: "Hello world?", // plain text body
        html: emailBody
      }

      try {
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent!")
        return Response.json({ success: true, message: "Email has been Sent" })
      } catch (error) {
        return Response.json({ success: false, message: "Some Errors Occured" })
      }
    } 
