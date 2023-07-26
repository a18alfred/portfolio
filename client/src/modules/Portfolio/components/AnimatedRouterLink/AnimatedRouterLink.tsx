import React from 'react';
import * as Styled from './AnimatedRouterLink.styles';

export interface Props {
    variant: 'standard' | 'highlight';
    text: string;
    to: string;
    animationTimeout: number;
}

/**
 *Renders animated router link
 *@function AnimatedRouterLink
 *@returns {JSX.Element}
 */
const AnimatedRouterLink: React.FC<Props> = ({
                                                 variant,
                                                 to,
                                                 text,
                                                 animationTimeout
                                             }) => {
    return (
        <Styled.CustomLink
            to={to}
            variant={variant}
            $animationTimeout={animationTimeout}
        >
            {text}
        </Styled.CustomLink>
    );
};

export default AnimatedRouterLink;