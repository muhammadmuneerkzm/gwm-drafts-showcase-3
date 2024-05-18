import Product from "../../../models/Product";
import connectDb from "../../../middleware/mongoose";


export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    for (let i = 0; i < body.length; i++) {
      console.log("This is body[i]", body[i])
      let p = await Product.findByIdAndUpdate(body[i]._id,body[i])
    }

    return Response.json({ status: 200, body: { success: "success" } , });
  } catch (error) {
    console.error('Error processing the request:', error);
    return Response.json({ status: 500, body: { error: "error" } });
  }
}
