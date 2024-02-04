import express from "express";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

export default router;

//outer for create category || post
router.post("/create-category", isAdmin, createCategoryController);

//update category || POST
router.put("/update-category/:id", isAdmin, updateCategoryController);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

router.delete("/delete-category/:id", isAdmin, deleteCategoryController);
