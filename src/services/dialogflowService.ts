import { sessionClient } from "../config/dialogflow";
import { protos } from "@google-cloud/dialogflow";

interface DetectIntentRequest {
    query: string;
}

interface DetectIntentResponse {
    fulfillmentText: string;
}

const detectIntent = async (request: DetectIntentRequest): Promise<DetectIntentResponse> => {
    const sessionId = 'unique-session-id';
    const sessionPath = sessionClient.projectAgentSessionPath('your-project-id', sessionId);

    const requestConfig: protos.google.cloud.dialogflow.v2.IDetectIntentRequest = {
        session: sessionPath,
        queryInput: {
            text: {
                text: request.query,
                languageCode: 'en-US',
            },
        },
    };

    const [response] = await sessionClient.detectIntent(requestConfig);
    if (!response.queryResult || !response.queryResult.fulfillmentText) {
        throw new Error("Invalid response from Dialogflow");
    }

    return { fulfillmentText: response.queryResult.fulfillmentText };
};

export { detectIntent };
