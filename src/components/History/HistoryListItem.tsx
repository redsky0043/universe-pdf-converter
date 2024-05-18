import { Dispatch, FC, SetStateAction } from "react";

import { HistoryItemType } from "../../types";
import { Button } from "../Button";

type ListItemPropsType = {
    isActive: boolean,
    PDFItem: HistoryItemType,
    setPdfData: Dispatch<SetStateAction<string>>,
}

const HistoryListItem: FC<ListItemPropsType> = ({ PDFItem, setPdfData, isActive }) => {
    const { base64, name } = PDFItem

    return (
        <li>
            <Button
                text={name}
                onClick={() => setPdfData(base64)}
                variant={isActive ? 'primary' : 'secondary'}
            />
        </li>
    );
};

export default HistoryListItem;