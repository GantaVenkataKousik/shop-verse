import mongoose from "mongoose";
import colors from "colors";


const URL = "mongodb+srv://vk:Bhavani1201@cluster0.kslyn8z.mongodb.net/reactEcommerce"

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(URL);
        console.log(`Connected to MongoDB Successfully ${conn.connection.host} `.bgGreen.white);
    }
    catch(err){
        console.log(`Error connecting to MongoDB`.bgWhite.re);
    }
}

export default connectDB;