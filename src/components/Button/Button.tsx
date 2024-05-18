import { FC } from "react";

type ButtonType = 'primary' | 'secondary';

type ButtonPropsType = {
    text: string,
    variant?: ButtonType,
    disabled?: boolean,
    onClick?: () => void,
}

const Button: FC<ButtonPropsType> = ({
    text = 'submit',
    variant = 'primary',
    disabled = false,
    onClick,
}) => {
    const buttonTypeClass = variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-slate-950';

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`px-4 py-2 text-white rounded-md focus:outline-none transition duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none max-w-full md:max-w-fit md:px-8 text-sm ${buttonTypeClass}`}
        >
            {text}
        </button>
    );
};

export default Button;
