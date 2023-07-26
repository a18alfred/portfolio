import React from 'react';
import * as Styled from './AnimatedTextHeader.styles';
import AnimationSlide from '../../components/AnimationSlide/AnimationSlide';

export interface Props {
    size: 'large' | 'medium' | 'small' | 'extraSmall';
    headerText?: string;
    margin: string;
    gradient?: boolean;
    animationDuration: number;
    children?: React.ReactNode;
}

/**
 *@TYPOGRAPHY re-usable section header
 *@function AnimatedTextHeader
 *@param {string} size - specifies font-size to be applied
 *@param {string} margin - margin to be applied
 *@param {string} headerText - text content of header
 *@param {boolean} gradient - specifies whether gradient color should be applied
 *@param {number} animationDuration - animation duration
 *@param {ReactNode} children - content of layout
 *@returns {JSX.Element} - Rendered AnimatedTextHeader component
 */
const AnimatedTextHeader: React.FunctionComponent<Props> = React.memo(({
                                                                           margin,
                                                                           headerText,
                                                                           size,
                                                                           gradient,
                                                                           animationDuration,
                                                                           children
                                                                       }): JSX.Element => {
    if (animationDuration === 0) return (
        <Styled.H1
            size={size}
            margin={margin}
            gradient={gradient}
            animationDuration={animationDuration}
        >
            {headerText ?? children}
        </Styled.H1>
    );

    return (
        <AnimationSlide>
            <Styled.H1
                size={size}
                margin={margin}
                gradient={gradient}
                animationDuration={animationDuration}
            >
                {headerText ?? children}
            </Styled.H1>
        </AnimationSlide>
    );
});

export default AnimatedTextHeader;
