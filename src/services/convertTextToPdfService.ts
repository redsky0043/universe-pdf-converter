import axios from 'axios';
import { notificationService } from "../utils";

let currentController: AbortController

export async function convertTextToPdfService(text: string) {
    if (currentController) {
        currentController.abort();
    }

    currentController = new AbortController();

    try {
        const response = await axios.post(
            `${process.env.VITE_API_URL}/create-pdf?apiKey=${process.env.VITE_API_KEY}`,
            { text },
            {
                responseType: 'blob',
                signal: currentController.signal
            }
        );

        notificationService.success('success')

        return response.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
        } else {
            console.error('Error converting text to PDF:', error);
            notificationService.error('Failed to convert text to PDF');
            throw new Error('Failed to convert text to PDF');
        }
    }
}