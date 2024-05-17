import axios from 'axios';

import { convertTextToPdf } from './convertTextToPdf';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('convertTextToPdf', () => {
    it('should convert text to PDF and return the blob', async () => {
        const mockPdfBlob = new Blob(['PDF content'], { type: 'application/pdf' });
        mockedAxios.post.mockResolvedValue({ data: mockPdfBlob });

        const inputText = 'Test convertTextToPdf';

        const result = await convertTextToPdf(inputText);

        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${process.env.VITE_API_URL}/create-pdf?apiKey=${process.env.VITE_API_KEY}`,
            { text: inputText },
            { responseType: 'blob' }
        );
        expect(result).toEqual(mockPdfBlob);
    });

    it('should throw an error when conversion fails', async () => {
        mockedAxios.post.mockRejectedValue(new Error('Failed to convert text to PDF'));

        const inputText = 'Hello, world!';

        await expect(convertTextToPdf(inputText)).rejects.toThrow('Failed to convert text to PDF');
    });
});