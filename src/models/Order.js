const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    orderId: {type: Number, required: true},
    products: {type: Object, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    amount: {type: Number, required: true},
    pincode: {type: Number, required: true},
    phone: {type: Number, required: true},
    status: {type: String,default: "Pending", required: true},
    deliveryStatus: {type: String,default: "unshipped", required: true},
}, {timestamps: true})

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema)
mongoose.models = {}
export default  mongoose.model("Order", OrderSchema)