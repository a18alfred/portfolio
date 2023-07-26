import * as Styled from './Decisions.styles';
import React from 'react';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import AnimatedImage from '../../../AnimatedImage/AnimatedImage';

interface Props {
    decisions: string[];
    screenshot: string;
}

/**
 * Component that displays decisions with animated content.
 * @function Decisions
 * @param {string[]} decisions - An array of decisions paragraphs.
 * @param {string} screenshot - Screenshot URL.
 * @returns {JSX.Element} - The rendered component.
 */
const Decisions: React.FC<Props> = ({ decisions, screenshot }) => {
    return (
        <Styled.Section>
            <Styled.LeftColumn>
                <AnimatedImage
                    src={screenshot}
                    alt={'Cкриншот'}
                    animationDuration={0.7}
                    delay={0.5}
                />
            </Styled.LeftColumn>
            <Styled.RightColumn>
                <AnimatedTextHeader
                    size={'small'}
                    margin={'0'}
                    animationDuration={0.7}
                >
                    Решения
                </AnimatedTextHeader>
                {decisions.map((text, index) => (
                    <AnimatedTextParagraph
                        key={index}
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        animationDuration={0.7}
                        paragraphText={text}
                    />
                ))}
            </Styled.RightColumn>
        </Styled.Section>
    );
};

export default Decisions;
