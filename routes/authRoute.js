import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

import {
  registerController,
  loginController,
  forgotpasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";

const router = express.Router();

//register || method post
router.post("/register", registerController);

//login route||method post
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotpasswordController);

//protected route
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route for admin
router.get("/admin-auth", isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.post("/profile", requireSignin, updateProfileController);

//orders
router.get("/orders", requireSignin, getOrdersController);

//all orders
router.get("/all-orders", isAdmin, getAllOrdersController);

// order status update
router.put("/order-status/:orderId", isAdmin, orderStatusController);

export default router;
