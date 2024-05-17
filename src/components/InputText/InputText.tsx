import { FC, ChangeEventHandler } from "react";

interface IInputTextProps {
    value: string,
    isRequired?: boolean,
    placeholder?: string,
    handleChange: ChangeEventHandler<HTMLTextAreaElement>,
}

const InputText: FC<IInputTextProps> = ({
    value,
    isRequired = true,
    placeholder = 'enter text',
    handleChange
}) => {
    return (
        <textarea
            value={value}
            required={isRequired}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
    );
};

export default InputText;
