import { FC } from "react";

type ButtonType = 'primary' | 'secondary';

interface IButtonProps {
    text: string,
    type?: ButtonType,
    disabled?: boolean,
    onClick?: () => void,
}

const Button: FC<IButtonProps> = ({
    text = 'submit',
    type = 'primary',
    disabled = false,
    onClick
}) => {
    const buttonTypeClass = type === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-slate-950';

    return (
        <button
            type="submit"
            disabled={disabled}
            onClick={onClick}
            className={`px-8 py-2 text-white rounded-md focus:outline-none transition duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none ${buttonTypeClass}`}
        >
            {text}
        </button>
    );
};

export default Button;
