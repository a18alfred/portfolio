import React from 'react';
import ScrollHint from '../ScrollHint/ScrollHint';
import * as Styled from './TextHero.styles';
import AnimatedTextHeader from '../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../typography/AnimatedTextParagraph/AnimatedTextParagraph';

interface Props {
    children: React.ReactNode;
    subtitle?: string;
    headerMargin?: string;
}

/**
 * Renders TextHero part in About Portfolio
 *@function TextHero
 *@param {ReactNode} children - Hero header
 *@param {string} headerMargin - Header margin
 *@param {string} subtitle - Hero subtitle
 *@returns {JSX.Element}
 */
const TextHero: React.FC<Props> = ({ children, subtitle, headerMargin = '0' }) => {
    return (
        <Styled.Container id={'hero'}>
            <AnimatedTextHeader
                size={'large'}
                margin={headerMargin}
                animationDuration={0.7}
            >
                {children}
            </AnimatedTextHeader>
            {
                !!subtitle &&
                <AnimatedTextParagraph
                    margin={'1rem 0'}
                    withDarkColor={false}
                    size={'large'}
                    animationDuration={0.7}
                >
                    {subtitle}
                </AnimatedTextParagraph>
            }
            <ScrollHint />
        </Styled.Container>
    );
};

export default TextHero;
