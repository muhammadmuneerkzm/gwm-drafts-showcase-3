import connectDb from "../../../middleware/mongoose";
import Order from "../../../models/Order";
import Product from "../../../models/Product";


export async function POST(request) {
    try {
      await connectDb();
      const body = await request.json();
      const {cart, name , phone, state ,city, email ,amount, address, pincode} = body;
      
      // Check if the cart is tempered or not.
      // Product
      // console.log(cart)
      let product;
      for(let item in cart){
        console.log("item:" , item)
        product = await Product.findOne({slug: item})
        console.log(product.price, cart[item]["price"])
        if(product.price != cart[item]["price"]){
          return Response.json({ success: false , message: "Cart was tempered!"});
        }
      }

    





      // Generating an Unique 7-digit Order ID
      let oid = await generateUniqueOrderId()
      let order = new Order({
        name,
        phone,
        email: email ,
        orderId : oid,
        address: address,
        amount: amount,
        pincode: pincode,
        state: state,
        city: city,
        products: cart
    });
    await order.save()

    for(let slug in cart){
        console.log(slug)
        console.log((await Product.findOne({slug})).availableQty)
        await Product.findOneAndUpdate({slug: slug}, {$inc: {'availableQty' : - cart[slug].qty}})
        console.log((await Product.findOne({slug})).availableQty)
    }

    return Response.json({ success: true, message: "Your Order Placed Successfully.", orderId: oid});
    } catch (error) {
      console.error('Error processing the request:', error);
      return Response.json({ success: false , message: "Some errors occured while placing order. Please Try Again!"});
    }
  }


  function generateOrderId() {
      const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
    //   const randomNumber = Math.floor(1 + Math.random() * 9);
      return randomNumber.toString();
    }
    
    async function generateUniqueOrderId() {
        while (true) {
            const newOrderId = generateOrderId();
            // Check if the generated order ID already exists in the database
            const existingOrder = await Order.findOne({ orderId: newOrderId });
            // If no matching order is found, return the unique order ID
            if (!existingOrder) {
                return newOrderId;
            }
        }
    }
    