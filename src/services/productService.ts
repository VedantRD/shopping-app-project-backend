import { NextFunction, Request, Response } from 'express';
import Product from '../models/productModel';

class ProductService {
    public async getAllProducts(req: Request, res: Response): Promise<any> {
        try {
            const products = (await Product.find({}))
            res.json({ products, count: products.length });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching products' });
        }
    }
    public async deleteProduct(req: Request, res: Response): Promise<any> {
        try {
            console.log(req.body)
            const { productId } = req.body;
            console.log()
            await Product.deleteOne({ _id: productId })
            res.json({ message: "Product deleted successfully" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching products' });
        }
    }
}

export default ProductService;