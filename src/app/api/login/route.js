
import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User"
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

export async function POST(request, res) {
  try {
    await connectDb();
    const body = await request.json();
    let user = await User.findOne({ email: body.email })
    console.log(user.password)
    console.log("Verified: ", jwt.verify(user.password, process.env.JWT_PASSAUTH_LOCK).LockedPass)
    const bytes = CryptoJS.AES.decrypt(jwt.verify(user.password, process.env.JWT_PASSAUTH_LOCK).LockedPass, 
      jwt.verify(process.env.AES_SECRET, jwt.verify(process.env.AES_JWT_SECRET, process.env.JWT_PASSKEY_SECRET)['key'])['key']   
      )
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (body.email == user.email && body.password == decryptedData) {
        let token = jwt.sign({ name: user.name, email: user.email } , 'jwtsecret');
        return Response.json({success: true , token});
      } else {
        return Response.json({ success: false, error: "Invalid Credentials" })
      }
    } else {
      return Response.json({ success: false, error: "No User Found" })
    }
  } catch (error) {
    console.error('Error processing the request:', error);
    return Response.json({ success: false, body: { error: "error" } });
  }
}

// DOCUMENTATION : https://www.slingacademy.com/article/next-js-route-handlers-extract-request-body/