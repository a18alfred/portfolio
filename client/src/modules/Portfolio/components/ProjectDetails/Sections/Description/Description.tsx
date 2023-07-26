import * as Styled from './Description.styles';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import React from 'react';
import ActionButton from '../../../ActionButton/ActionButton';
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

interface Props {
    name: string;
    description: string[];
    icon: string;
    work: string[];
    githubUrl: string;
    websiteUrl: string;
}

/**
 * Renders the description section of the details page.
 * @function
 *
 * @param {string} name - The name of the project.
 * @param {string[]} description - An array of description paragraphs.
 * @param {string} icon - The URL of the project's icon.
 * @param {string[]} work - An array of work items.
 * @param {string} githubUrl - The URL of the project's GitHub repository.
 * @param {string} websiteUrl - The URL of the project's website.
 *
 * @returns {JSX.Element} Description section JSX.
 */
const Description: React.FC<Props> = ({
                                          name,
                                          description,
                                          icon,
                                          work,
                                          githubUrl,
                                          websiteUrl
                                      }) => {
    return (
        <Styled.Section>
            <Styled.LeftColumn>
                <AnimatedTextHeader
                    size={'small'}
                    margin={'0'}
                    animationDuration={0.7}
                >
                    <Styled.NameWrapper>
                        <Styled.Logo src={icon} alt={name} />
                        <span>{name}</span>
                    </Styled.NameWrapper>
                </AnimatedTextHeader>
                {description.map((text, index) => (
                    <AnimatedTextParagraph
                        key={index}
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        animationDuration={0.7}
                    >
                        {text}
                    </AnimatedTextParagraph>
                ))}
                <Styled.LinksWrapper>
                    <ActionButton
                        renderAsLink
                        href={websiteUrl}
                        openNewTab
                        isAnimated={true}
                        buttonText='Вебсайт'
                        icon={<TbWorld className={'action-icon'} />}
                    />
                    {!!githubUrl &&
                        <ActionButton
                            renderAsLink
                            href={githubUrl}
                            openNewTab
                            isAnimated={true}
                            buttonText='Github'
                            icon={<FaGithub className={'action-icon'} />}
                        />
                    }
                </Styled.LinksWrapper>
            </Styled.LeftColumn>
            <Styled.RightColumn>
                {work.map((item, index) =>
                    <AnimatedTextParagraph
                        key={index}
                        margin={'0'}
                        withDarkColor={true}
                        size={'large'}
                        delay={0.3 * index}
                        animationDuration={0.7}
                    >
                        {index === 0 &&
                            <Styled.Breaker />
                        }
                        {item}
                        <Styled.Breaker />
                    </AnimatedTextParagraph>
                )}
            </Styled.RightColumn>
        </Styled.Section>
    );
};

export default Description;
