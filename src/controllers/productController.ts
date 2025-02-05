import { NextFunction, Request, Response } from 'express';
import Product from '../models/productModel';
import ProductService from '../services/productService'

const productService = new ProductService()

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        return await productService.getAllProducts(req, res)
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        console.log('delete product controller')
        return await productService.deleteProduct(req, res)
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getProductByHandle = async (req: Request, res: Response) => {
    try {
        const product = await Product.findOne({ Handle: req.params.handle });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};
