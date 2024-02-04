import JWT from "jsonwebtoken";
import userModels from "../models/userModels.js";
//learn what is middleware
//Protected route token base

export const requireSignin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    console.log("decode");
    console.log(decode);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in verification",
      success: false,
      error,
    });
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const user = await userModels.findById(decode._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
