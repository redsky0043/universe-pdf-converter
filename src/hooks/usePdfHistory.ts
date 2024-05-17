import { useEffect, useState } from "react";

interface IHistoryItem {
    id: string;
    name: string;
    base64: string;
}

const usePdfHistory = () => {
    const [history, setHistory] = useState<IHistoryItem[]>([]);

    const savedHistory = localStorage.getItem('pdfHistory');

    useEffect(() => {
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, [savedHistory]);

    const addToHistory = (file: IHistoryItem) => {
        const updatedHistory = [...history, file];
        setHistory(updatedHistory);
        localStorage.setItem('pdfHistory', JSON.stringify(updatedHistory));
    };

    return {
        history,
        addToHistory
    };
};

export default usePdfHistory;
