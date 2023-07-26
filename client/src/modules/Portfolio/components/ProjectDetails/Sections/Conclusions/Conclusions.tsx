import * as Styled from './Conclusions.styles';
import React from 'react';
import AnimatedImage from '../../../AnimatedImage/AnimatedImage';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import ActionButton from '../../../ActionButton/ActionButton';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ToTopButton from '../../../ToTopButton/ToTopButton';

interface Props {
    conclusions: string[];
    screenshot: string;
}

/**
 * Component that displays conclusions with animated content.
 * @function Conclusions
 * @param {string[]} conclusions - An array of conclusions paragraphs.
 * @param {string} screenshot - Screenshot URL.
 * @returns {JSX.Element} - The rendered component.
 */
const Conclusions: React.FC<Props> = ({ conclusions, screenshot }) => {
    const navigate = useNavigate();

    const onProjects = () => {
        navigate(`/portfolio/projects`);
    };

    return (
        <Styled.Section>
            <AnimatedImage
                src={screenshot}
                alt={'Cкриншот'}
                animationDuration={0.7}
                delay={0.5}
            />
            <Styled.TextWrapper>
                <AnimatedTextHeader
                    size={'small'}
                    margin={'0'}
                    animationDuration={0.7}
                >
                    Выводы
                </AnimatedTextHeader>
                {conclusions.map((text, index) => (
                    <AnimatedTextParagraph
                        key={index}
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        animationDuration={0.7}
                        paragraphText={text}
                    />
                ))}
                <ActionButton
                    onClick={onProjects}
                    isAnimated={true}
                    buttonText='Список работ'
                    icon={<FiArrowRight className={'action-icon'} />}
                />
            </Styled.TextWrapper>
            <ToTopButton />
        </Styled.Section>
    );
};

export default Conclusions;
