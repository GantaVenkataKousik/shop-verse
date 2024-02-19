import productSchema from "../../models/userProductSchema.js";
import userModel from "../../models/userModel.js"; 
import wishlistSchema from "../../models/productLikes.js";

export const analysisController =  async(req,res) =>  {
    try{
        const Ordered = await productSchema.find({status:"Ordered"})
        const InCart = await productSchema.find({status:"InCart"})
        const customers = await userModel.find({});
        return res.status(200).send({
            success: true,
            message:"Details Fetched Successfully",
            Ordered,
            InCart,
            customers
        })
    }
    catch(err) {
        console.error(err);
        return res.status(500).send({
            success:false,
            message:"Error in Registration",
            err
        })
    }
}


export const ordersController = async(req, res) => {
    try{
        const orders = await productSchema.find({status:"Ordered"});
        return res.status(200).send({
            success:true,
            message:"fetched successfully",
            orders
        })
    }
    catch(err) {
        console.error(err);
        return res.status(500).send({
            success:false,
            message:"Error in Registration",
            err
        })
    }
}