// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     slug: {type: String, required: true, unique: true},
//     desc: {type: String, required: true, },
//     img: {type: String, required: true},
//     category: {type: String, required: true},
//     price: {type: Number, required: true},
//     availableQty: {type: Number, required: true},
// }, {timestamps: true})

// mongoose.models = {}
// export default mongoose.model("Product", ProductSchema)


import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: Array, required: true },
  price: { type: Number, required: true },
  availableQty: { type: Number, required: true },
}, { timestamps: true });



mongoose.models = {}
export default mongoose.model("Product", ProductSchema)


// try {
//   // Check if the model already exists to prevent "OverwriteModelError"
//   Product = mongoose.model('Product');
// } catch (error) {
//   // If the model doesn't exist, create it
// }

// Product = mongoose.model('Product', ProductSchema);
// export default Product;