import React from 'react';
import getIconByName, { IconName } from '../../../config/osIcons';
import * as Styled from './Icon.styles';
import { CSSProperties } from 'styled-components';

export interface IconProps {
    style?: CSSProperties;
    icon: IconName;
    size?: number;
}

/**
 Icon component.
 @param {string} icon - The name of the icon to be displayed.
 @param {CSSProperties} [style] - Optional style to be applied to the icon.
 @param {number} [size] - Optional size of the icon.
 @returns {JSX.Element} - The Icon component.
 */
const Icon: React.FC<IconProps> = ({ icon, style, size }) => {
    const iconStyle: CSSProperties = {
        ...(size && { width: size, height: size }),
        ...style
    };
    const iconSrc = getIconByName(icon);

    if (iconSrc)
        return (
            <Styled.IconImg
                style={iconStyle}
                alt={icon}
                src={getIconByName(icon)}
            />
        );
    return null;
};


export default Icon;
