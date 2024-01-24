import express from 'express';
import {fetchProductsController} from  '../controllers/ecommerce/fetchProductsControllers.js';
import { addToCartController,displayCartController,addToWishlistController,checkoutController,removeProductController } from '../controllers/ecommerce/cartController.js';


//router object
const router = express.Router()

//PRODUCTS
router.get("/fetchProducts",fetchProductsController);

//ADD TO CART
router.post("/addToCart",addToCartController);

//REMOVING PRODUCT
router.post("/cart/removeProduct",removeProductController);

//CHECKOUT CART
router.post("/cart/checkout",checkoutController);


//ADD TO WISHLIST
router.post("/addToWishlist",addToWishlistController);


//DISPLAY CART
router.post("/displayCart",displayCartController)

export default router;