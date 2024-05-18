const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, default: ''},
    state: {type: String, default: ''},
    city: {type: String, default: ''},
    pincode: {type: Number, default: ''},
    phone: {type: Number,  default: ''},
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("User", UserSchema)