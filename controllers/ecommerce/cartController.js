import userProductSchema from '../../models/userProductSchema.js';
import userModel from '../../models/userModel.js';
import wishlistSchema from '../../models/productLikes.js';
import productSchema from '../../models/productSchema.js';

export const checkoutController = async (req, res) => {
    try {
        const { user } = req.body;
        const result = await userProductSchema.updateMany(
            {
                userid: user._id,
                status: "InCart"
            },
            {
                $set: { status: "Ordered" }
            }
        );

        if (result) {
            return res.status(200).send({ success: true, message: 'Products updated to Ordered status.' });
        } else {
            // The update failed
            console.error('Failed to update products');
            return res.status(500).json({ success: false, message: 'Failed to update products.' });
        }
    }
    catch (err) {
        return res.status(304).send({
            success: false,
            message: "Error fetching Products!"
        })
    }
}


export const removeProductController = async (req, res) => {
    try {
        const { productId} = req.body;
        console.log(productId);
        
        const response = await userProductSchema.deleteOne({_id:productId})
        console.log(response);
        if (response) {
            return res.status(200).send({
                success: true,
                message: "Product removed successfully"
            })
        }
        else{
            
        return res.status(500).send({
            success: true,
            message: "Error removed successfully"
        })
        }
    }
    catch (err) {
        return res.status(304).send({
            success: false,
            message: "Error fetching Products!"
        })
    }
}


export const displayCartController = async (req, res) => {
    try {
        const { user } = req.body;
        const products = await userProductSchema.find({
            userid: user._id,
            status: "InCart"
        })
        return res.status(200).send({
            success: true,
            message: "Products fetched successfully",
            products
        })
    }
    catch (err) {
        return res.status(304).send({
            success: false,
            message: "Error fetching Products!"
        })
    }
}

export const addToWishlistController = async (req, res) => {
    try {

        const { productId, user } = req.body;

        const userFound = await userModel.findOne({ _id: user._id });
        const product = await productModel.findOne({
            _id: productId
        })
        const newProduct = new wishlistSchema({
            userid: userFound._id,
            username: userFound.name,
            name: product.name,
            price: product.price,
            imgUrl: product.imgUrl,
            category

        });
        await newProduct.save();
        return res.status(200).send({
            success: true,
            message: "The product is added!"
        })
    }
    catch (err) {
        return res.status(404).send({
            success: false,
            message: "The product is not added!"
        })
    }
};

export const addToCartController = async (req, res) => {
    try {
        const { productId, user } = req.body;
        const userFound = await userModel.findOne({ _id: user._id });
        const product = await productSchema.findOne({
            _id: productId
        });
        const isProductExist = await userProductSchema.findOne({ userid: user._id, name: product.name,status:"InCart" });
        console.log(isProductExist);
        if (!isProductExist) {
               
            const newProduct = new userProductSchema({
                userid: userFound._id,
                username: userFound.name,
                name: product.name,
                price: product.price,
                imgUrl: product.imgUrl
            });
            await newProduct.save();
            console.log("user product successfully added to cart");
            return res.status(200).send({
                success: true,
                message: "The product is added!"
            })
        }
    }
    catch (err) {
        console.error(err); // Log the error for debugging.
        return res.status(500).send({
            success: false,
            message: "The product is not added!"
        })
    }
}
