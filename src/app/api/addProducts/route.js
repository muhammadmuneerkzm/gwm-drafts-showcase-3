
import Product from "../../../models/Product";
import connectDb from "../../../middleware/mongoose";


export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    for (let i = 0; i < body.length; i++) {
      console.log("This is body[i]", body[i])
      let p = new Product({
        title: body[i].title,
        slug: body[i].slug,
        desc: body[i].desc,
        img: body[i].img,
        category: body[i].category,
        price: body[i].price,
        availableQty: body[i].availableQty,
      });
      console.log(p)
      await p.save();
    }

    return Response.json({ status: 200, body: { success: "success" } });
  } catch (error) {
    console.error('Error processing the request:', error);
    return Response.json({ status: 500, body: { error: "error" } });
  }
}

// DOCUMENTATION : https://www.slingacademy.com/article/next-js-route-handlers-extract-request-body/