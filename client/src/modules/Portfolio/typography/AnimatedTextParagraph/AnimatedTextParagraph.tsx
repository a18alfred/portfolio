import React from 'react';
import * as Styled from './AnimatedTextParagraph.styles';
import AnimationSlide from '../../components/AnimationSlide/AnimationSlide';

export interface Props {
    margin: string;
    paragraphText?: string;
    withDarkColor: boolean;
    size: 'large' | 'medium' | 'small';
    animationDuration: number;
    delay?: number;
    children?: React.ReactNode;
}

/**
 *@TYPOGRAPHY re-usable text paragraph
 *@function PortfolioParagraph
 *@param {string} size - determines font-size of paragraph
 *@param {string} margin - margin to be applied
 *@param {string} paragraphText - text content of paragraph
 *@param {boolean} withDarkColor - specifies whether paragraph will be dark or white
 * @param {number} animationDuration?: animation duration
 * @param {number} delay - delay of animation
 *@param {object} variants - object containing framer motion animation variants
 *@param {ReactNode} children - content of layout
 *@returns {JSX.Element} - Rendered PortfolioParagraph component
 */
const AnimatedTextParagraph: React.FunctionComponent<Props> = ({
                                                                   margin,
                                                                   paragraphText,
                                                                   withDarkColor,
                                                                   size,
                                                                   animationDuration,
                                                                   delay,
                                                                   children
                                                               }): JSX.Element => {
    if (animationDuration === 0) return (
        <Styled.P
            margin={margin}
            $withDarkColor={withDarkColor}
            size={size}
            animationDuration={animationDuration}
            delay={delay}
        >
            {paragraphText ?? children}
        </Styled.P>
    );

    return (
        <AnimationSlide>
            <Styled.P
                margin={margin}
                $withDarkColor={withDarkColor}
                size={size}
                animationDuration={animationDuration}
                delay={delay}
            >
                {paragraphText ?? children}
            </Styled.P>
        </AnimationSlide>
    );
};

export default AnimatedTextParagraph;
