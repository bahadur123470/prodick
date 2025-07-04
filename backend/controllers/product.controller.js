import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error fetching products" });
        console.log("Error in fetching products", error.message );
    }}
export const createProducts = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error in creating product", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}   
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate( id, product, { new: true });
        res.status(200).json({ success: true, data: updateProduct });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
} 
export const deleteProduct = async (req, res) =>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    }
    catch (error) {
        console.log("Error in deleting product", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

