import express, { Router, Request, Response } from 'express';
import { handleDialogflowRequest } from '../controllers/dialogflowController';

const router: Router = express.Router();

router.post('/dialogflow-webhook', async (req: Request, res: Response) => {
    const query = req.body.queryResult.queryText;
    const response = await handleDialogflowRequest({ query });
    res.send(response);
});

export default router;