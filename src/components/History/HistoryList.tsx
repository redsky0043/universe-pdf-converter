import { FC, Dispatch, SetStateAction } from "react";

import usePdfHistory from "../../hooks/usePdfHistory";
import HistoryListItem from "./HistoryListItem";

interface IHistoryListProps {
    setPdfData: Dispatch<SetStateAction<string>>,
}

const HistoryList: FC<IHistoryListProps> = ({ setPdfData }) => {
    const { history } = usePdfHistory();
    
    const isEmptyHistory = history.length === 0

    return (!isEmptyHistory && (
        <div>
            <h2 className="text-xl font-bold mb-4">
                History
            </h2>
            <ul className="list-disc pl-5 grid gap-2">
                {history.map((historyItem) => (
                    <HistoryListItem
                        key={historyItem.id}
                        PDFItem={historyItem}
                        setPdfData={setPdfData}
                    />
                ))}
            </ul>
        </div>
    ));
};

export default HistoryList;