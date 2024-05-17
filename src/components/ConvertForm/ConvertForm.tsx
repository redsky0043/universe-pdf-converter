import { v4 as uuid } from 'uuid';
import { toast } from "react-toastify";
import { useState, FC, ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react";

import { Button } from "../Button";
import { InputText } from "../InputText";
import { usePdfHistory } from "../../hooks";
import { convertTextToPdf } from "../../services/convertTextToPdf";
import { convertBlobToBase64 } from "../../utils/convertBlobToBase64.ts";

interface IFormProps {
    setPdfData: Dispatch<SetStateAction<string>>,
}

const ConvertForm: FC<IFormProps> = ({ setPdfData }) => {
    const [inputText, setInputText] = useState("");
    const { addToHistory } = usePdfHistory();

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const pdfBlob = await convertTextToPdf(inputText);
            const pdfBase64 = (await convertBlobToBase64(pdfBlob)) as string;

            setPdfData(pdfBase64);

            const pdfName = `PDF_${new Date().toISOString()}.pdf`;

            addToHistory({ id: uuid(), name: pdfName, base64: pdfBase64 });
        } catch (error) {
            console.log("error :", error);
            toast.error('Failed to convert')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
            <InputText
                value={inputText}
                handleChange={handleChange}
                placeholder="Введіть текст для конвертаціїї в PDF"
            />
            <Button text="Конвертувати в PDF"/>
        </form>
    );
};

export default ConvertForm;