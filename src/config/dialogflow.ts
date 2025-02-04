import { SessionsClient } from '@google-cloud/dialogflow';

const sessionClient = new SessionsClient({
    projectId: 'your-project-id',
    credentials: {
        client_email: 'your-client-email',
        private_key: 'your-private-key',
    },
});

export { sessionClient };