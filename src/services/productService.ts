import { NextFunction, Request, Response } from 'express';
import Product from '../models/productModel';

// export const getProducts = async () => {
//     console.log('here')
//     return 'hjeaskfjgbekfg'
//     // return await Product.find();
// };

// export const getProductByHandle = async (handle: string) => {
//     return await Product.findOne({ Handle: handle });
// };

class ProductService {
    public async getAllProducts(req: Request, res: Response): Promise<any> {
        try {
            const products = (await Product.find({})).slice(10, 30);
            console.log(products)
            res.json({ products, count: products.length });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching products' });
        }
    }
}

export default ProductService;