import { FC } from "react";

interface IButtonProps {
    text: string,
}

const Button: FC<IButtonProps> = ({ text = 'submit' }) => {
    return (
        <button
            type="submit"
            className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
            {text}
        </button>
    );
};

export default Button;
