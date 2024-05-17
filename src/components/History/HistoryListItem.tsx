import { Dispatch, FC, SetStateAction } from "react";

import { IHistoryItem } from "../../types/types";
import { Button } from "../Button";

interface IListItemProps {
    PDFItem: IHistoryItem,
    setPdfData: Dispatch<SetStateAction<string>>,
}

const HistoryListItem: FC<IListItemProps> = ({ PDFItem, setPdfData }) => {
    const { base64, name } = PDFItem

    return (
        <li>
            <Button
                text={name}
                type='secondary'
                onClick={() => setPdfData(base64)}
            />
        </li>
    );
};

export default HistoryListItem;