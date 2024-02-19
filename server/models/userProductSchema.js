import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    userid: String,
    username: String,
    producerid: String,
    producername: String,
    name: String,
    price: Number,
    imgUrl: String,
    quantity: Number,
    status: {
        type: String,
        default: "InCart"
    },
    date: String
});

// userProductSchema.js
export default mongoose.model('products', productSchema);