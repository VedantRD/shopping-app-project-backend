import { Router } from 'express';
import { getAllProducts, deleteProduct } from '../controllers/productController';

const router: Router = Router();

router.get('/', getAllProducts);
router.delete('/', deleteProduct);

export default router;
