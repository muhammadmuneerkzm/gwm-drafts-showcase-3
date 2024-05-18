const mongoose = require('mongoose');

const ForgotSchema = new mongoose.Schema({
    email: {type: String, required: true},
    passkey: {type: String, required: true},
    token: {type: String, required: true},
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("Forgot", ForgotSchema)