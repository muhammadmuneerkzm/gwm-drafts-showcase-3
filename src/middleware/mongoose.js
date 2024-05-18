// import mongoose from 'mongoose';
// const connectDb = ()=>{
//   if(mongoose.connections)
//   mongoose.connect('mongodb://localhost:27017/smoz')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));
// }

// export default connectDb

import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/smoz');
    // console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDb


