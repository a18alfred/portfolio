import * as Styled from './ProjectCard.styles';
import NumberDivider from '../../NumberDivider/NumberDivider';
import React from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import { FiArrowRight } from 'react-icons/fi';
import { ImgColumn } from './ProjectCard.styles';
import AnimatedTextParagraph from '../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import AnimatedTextHeader from '../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedImage from '../../AnimatedImage/AnimatedImage';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: number;
    title: string;
    projectName: string;
    projectLogo: string;
    description: string;
    stack: string;
    screenshot: string;
    flipSides?: boolean;
}

/**
 * ProjectCard component displays a project slide with details and an image.
 * @function ProjectCard
 * @param {Object} props - The component props.
 * @param {number} props.id - The ID of the project.
 * @param {string} props.title - The title of the project slide.
 * @param {string} props.projectName - The name of the project.
 * @param {string} props.projectLogo - The URL of the project logo.
 * @param {string} props.description - The description of the project.
 * @param {string} props.stack - The stack used in the project.
 * @param {string} props.screenshot - The URL of the project screenshot.
 * @param {boolean} [props.flipSides] - Whether to flip the positions of the columns. Default is false.
 *
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
const ProjectCard: React.FC<Props> = ({
                                          id,
                                          title,
                                          projectName,
                                          projectLogo,
                                          description,
                                          stack,
                                          screenshot,
                                          flipSides
                                      }) => {
    const navigate = useNavigate();

    const onDetails = () => {
        navigate(`/portfolio/projects/${id}`);
    };
    return (
        <Styled.Container>
            <Styled.Wrapper flipSides={flipSides}>
                <Styled.DescColumn>
                    <NumberDivider number={id} />
                    <AnimatedTextHeader
                        size={'small'}
                        margin={'0'}
                        animationDuration={0.7}
                    >
                        {title}
                    </AnimatedTextHeader>
                    <AnimatedTextParagraph
                        margin={'0'}
                        withDarkColor={false}
                        size={'large'}
                        animationDuration={0.7}
                    >
                        <Styled.NameWrapper>
                            <Styled.Logo src={projectLogo} alt={projectName} />
                            <span>{projectName}</span>
                        </Styled.NameWrapper>
                    </AnimatedTextParagraph>
                    <AnimatedTextParagraph
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        animationDuration={0.7}
                        paragraphText={description}
                    />
                    <AnimatedTextParagraph
                        margin={'0'}
                        withDarkColor={true}
                        size={'medium'}
                        animationDuration={0.7}
                    >
                        <Styled.Stack>Стек:</Styled.Stack> {stack}
                    </AnimatedTextParagraph>

                    <Styled.ImgWrapper>
                        <AnimatedImage
                            src={screenshot}
                            alt={'Скриншот'}
                            animationDuration={0.7}
                            delay={0}
                        />
                    </Styled.ImgWrapper>
                    <Styled.BtnWrapper>
                        <ActionButton
                            onClick={onDetails}
                            isAnimated={true}
                            animationDuration={0.7}
                            buttonText='Подробнее'
                            icon={<FiArrowRight className={'action-icon'} />}
                        />
                    </Styled.BtnWrapper>
                </Styled.DescColumn>
                <ImgColumn>
                    <AnimatedImage
                        src={screenshot}
                        alt={'Скриншот'}
                        animationDuration={0.7}
                        delay={0.4}
                    />
                </ImgColumn>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default ProjectCard;
