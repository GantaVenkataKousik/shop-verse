import express from 'express';
import {analysisController,ordersController} from "../controllers/admin/dashboardController.js"
import {deleteProductController} from "../controllers/admin/productController.js";

//router object
const router = express.Router();

//routing 
  //REGISTER
router.post("/analysis",analysisController);

//orders
router.post("/orders",ordersController);

//PRODUCTS
//DELETE
router.post("/deleteProduct",deleteProductController);

export default router;