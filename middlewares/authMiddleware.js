import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
const secretKey = "fjsdfh849jkaslfjd";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.Authorization,
      secretKey
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};