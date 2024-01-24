import mongoose from "mongoose"


const allproductSchema = new mongoose.Schema({
    name: String,
    producerid: String,
    producername: String,
    imgUrl: String,
    info: String,
    price: Number,
    category: String
});

export default mongoose.model('allproducts', allproductSchema);