import { Dispatch, FC, SetStateAction } from "react";

import { IHistoryItem } from "../../types/types";
import { Button } from "../Button";

interface IListItemProps {
    isActive: boolean,
    PDFItem: IHistoryItem,
    setPdfData: Dispatch<SetStateAction<string>>,
}

const HistoryListItem: FC<IListItemProps> = ({ PDFItem, setPdfData, isActive }) => {
    const { base64, name } = PDFItem

    return (
        <li>
            <Button
                text={name}
                type={isActive ? 'primary' : 'secondary'}
                onClick={() => setPdfData(base64)}
            />
        </li>
    );
};

export default HistoryListItem;