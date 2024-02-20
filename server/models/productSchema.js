import mongoose from "mongoose"


const allproductSchema = new mongoose.Schema({
    name: String,
    producerid: String,
    productname: String,
    imgUrl: String,
    info: String,
    price: Number,
    category: String
});

export default mongoose.model('allproducts', allproductSchema);