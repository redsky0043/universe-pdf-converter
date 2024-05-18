import {createContext, useState, FC, ReactNode, useEffect, useCallback, useContext} from 'react';
import { HistoryItemType } from "../types";

/* * * * * * *
 *   Types   *
 * * * * * * */
type PdfHistoryContextType = {
    history: HistoryItemType[],
    addToHistory: (item: HistoryItemType) => void,
}

type PdfHistoryProviderPropsType = {
    children: ReactNode,
}

/* * * * * * * * * *  * *
 *   Context Creation   *
 * * * * * * * * * *  * */
const PdfHistoryContext = createContext<PdfHistoryContextType | undefined>(undefined)

/* * * * * * * * * * *  * *
 *   Provider Component   *
 * * * * * * * * * * *  * */
export const PdfHistoryProvider: FC<PdfHistoryProviderPropsType> = ({ children }) => {
    const [history, setHistory] = useState<HistoryItemType[]>([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('pdfHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const addToHistory = useCallback((file: HistoryItemType) => {
        setHistory((prevHistory) => {
            const updatedHistory = [...prevHistory, file];
            localStorage.setItem('pdfHistory', JSON.stringify(updatedHistory));
            return updatedHistory;
        });
    }, []);

    return (
        <PdfHistoryContext.Provider value={{ history, addToHistory }}>
            {children}
        </PdfHistoryContext.Provider>
    );
};

/* * * * * * * * * * * * * * *
 *   Custom PdfHistory Hook  *
 * * * * * * * * * * * * * * */
export const usePdfHistory = (): PdfHistoryContextType => {
    const context = useContext(PdfHistoryContext);
    if (!context) {
        throw new Error('usePdfHistory must be used within a PdfHistoryProvider');
    }
    return context;
}