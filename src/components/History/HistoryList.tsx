import { FC, Dispatch, SetStateAction } from "react";

import { usePdfHistory } from "../../providers";
import HistoryListItem from "./HistoryListItem";

type HistoryListPropsType = {
    pdfData: string,
    setPdfData: Dispatch<SetStateAction<string>>,
}

const HistoryList: FC<HistoryListPropsType> = ({ setPdfData,  pdfData  }) => {
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
                        isActive={pdfData === historyItem.base64}
                    />
                ))}
            </ul>
        </div>
    ));
};

export default HistoryList;