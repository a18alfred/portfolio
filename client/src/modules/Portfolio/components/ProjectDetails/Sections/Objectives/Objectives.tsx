import * as Styled from './Objectives.styles';
import AnimatedImage from '../../../AnimatedImage/AnimatedImage';
import React from 'react';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';

interface Props {
    objectives: string[];
    screenshot: string;
}

/**
 Renders objectives component
 @function
 @param {string[]} objectives - An array of objectives paragraphs
 @param {string} screenshot - Screenshot URL
 @returns {JSX.Element} Objectives component
 */
const Objectives: React.FC<Props> = ({ objectives, screenshot }) => {
    return (
        <Styled.Section>
            <AnimatedImage
                src={screenshot}
                alt={'Cкриншот'}
                animationDuration={0.7}
                delay={0.3}
            />
            <Styled.TextWrapper>
                <AnimatedTextHeader
                    size={'small'}
                    margin={'0'}
                    animationDuration={0.7}
                >
                    Задачи
                </AnimatedTextHeader>
                {objectives.map((text, index) => (
                    <AnimatedTextParagraph
                        key={index}
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        animationDuration={0.7}
                        paragraphText={text}
                    />
                ))}
            </Styled.TextWrapper>
        </Styled.Section>
    );
};

export default Objectives;
