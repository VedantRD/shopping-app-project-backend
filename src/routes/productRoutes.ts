import { Router } from 'express';
import { getAllProducts, getProductByHandle } from '../controllers/productController';

const router: Router = Router();

router.get('/', getAllProducts);
router.get('/:handle', getProductByHandle);

export default router;
