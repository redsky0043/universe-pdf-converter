import { FC, useState, ChangeEvent, FormEvent } from "react";
import PDFViewer from 'pdf-viewer-reactjs'

import { Button } from "../Button";
import { InputText } from "../InputText";
import { convertTextToPdf } from "../../services/convertTextToPdf";

interface IFormProps {
    text?: string,
}

const ConvertForm: FC<IFormProps> = () => {
    const [inputText, setInputText] = useState("");
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const pdfData = await convertTextToPdf(inputText)

            const pdfBlobUrl = URL.createObjectURL(pdfData);

            setPdfUrl(pdfBlobUrl);

            console.log('pdfData :', pdfData)

        } catch (error) {
            console.log('error :', error)
        }
    };

    // console.log('pdfUrl :', pdfUrl)

    return (
        <form onSubmit={handleSubmit} className="grid gap-8">
            <InputText
                value={inputText}
                handleChange={handleChange}
                placeholder="Введіть текст для конвертаціїї в PDF"
            />
            <Button text="Конвертувати в PDF"/>
            {pdfUrl && <PDFViewer document={{ url: pdfUrl }}/>}
        </form>
    );
};

export default ConvertForm;