import express from 'express';
import { createProducts, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts );
router.post("/", createProducts );
router.put("/:id", updateProduct );
router.delete("/:id", deleteProduct );

export default router;