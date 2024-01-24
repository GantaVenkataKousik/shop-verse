import express from 'express';
import {registerController,loginController,testController} from  '../controllers/auth/authController.js';

import { requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing 
  //REGISTER
router.post("/register",registerController);

//LOGIN
router.post("/login",loginController);


//TEST
router.get("/test",requireSignIn,testController);

export default router;