import React from 'react';
import * as Styled from './Button.styles';
import { IconName } from '../../config/osIcons';
import { Icon } from '../General';

export interface ButtonProps {
    icon?: IconName;
    text?: string;
    onClick?: () => void;
}

/**
 * A button component that displays an icon and/or text.
 * @param {string} [icon] - The icon to display in the button.
 * @param {string} [text] - The text to display in the button.
 * @param {function} [onClick] - The callback function to invoke when the button is clicked.
 * @returns {JSX.Element} - The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
    const click = (e: any) => {
        e.preventDefault();
        onClick && onClick();
    };

    return (
        <Styled.OuterBorder
            isIcon={!!icon}
            onMouseDown={click}
        >
            <Styled.InnerBorder
                isIcon={!!icon}
                isText={!!text}
            >
                {icon && <Icon icon={icon} />}
                {text && (<p>{text}</p>)}
            </Styled.InnerBorder>
        </Styled.OuterBorder>
    );
};

export default Button;
