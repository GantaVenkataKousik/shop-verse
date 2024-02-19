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
    category:String,
    date: String
});


export default mongoose.model('wishlists', productSchema);