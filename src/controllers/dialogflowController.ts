import { detectIntent } from '../services/dialogflowService';

interface HandleDialogflowRequest {
    query: string;
}

interface HandleDialogflowResponse {
    fulfillmentText: string;
}

const handleDialogflowRequest = async (request: HandleDialogflowRequest): Promise<HandleDialogflowResponse> => {
    const response = await detectIntent(request);
    return response;
};

export { handleDialogflowRequest };