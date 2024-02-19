import productSchema from "../../models/productSchema.js";

export const deleteProductController =  async(req,res) =>  {
    try{
        const {productId} = req.body;
        console.log(productId);
        const result = await productSchema.deleteOne({_id:productId});
        if(result){
            return res.status(200).send({
                success: true,
                message:"Product deleted successfully",
            });
        }
        return res.status(500).send({
            success:false,
            message:"Error while deleting the product",
            err
        })
        
    }
    catch(err) {
        console.error(err);
        return res.status(500).send({
            success:false,
            message:"Error while deleting the product",
            err
        })
    }
}
