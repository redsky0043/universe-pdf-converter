import axios from 'axios';
import { toast } from "react-toastify";

export async function convertTextToPdf(text: string) {
    try {
        const response = await axios.post(
            `${process.env.VITE_API_URL}/create-pdf?apiKey=${process.env.VITE_API_KEY}`,
            { text },
            { responseType: 'blob' }
        );

        toast.success('success')

        return response.data;
    } catch (error) {
        console.error('Error converting text to PDF:', error);
        toast.error('URL not found')
        throw new Error('Failed to convert text to PDF');
    }
}