import { Helmet } from 'react-helmet-async';
import { TITLE_FULL_NAME } from '../../../../shared/config/global';
import React from 'react';
import * as Styled from './Projects.styles';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectCards } from '../../config/portfolioProjectCards';
import TextHero from '../TextHero/TextHero';
import ToTopButton from '../ToTopButton/ToTopButton';

/**
 Renders the work page of the website.
 @function Projects
 @returns {JSX.Element} - Projects page JSX
 */
const Projects = () => {
    return (
        <>
            <Helmet>
                <title>{`Работы | ${TITLE_FULL_NAME}`}</title>
            </Helmet>
            <TextHero
                subtitle={'Из-за соглашений о неразглашении я ограничен личными проектами и некоторыми завершёнными заказами, над которыми я работал в прошлом.'}
            >
                <span className={'text-gradient'}>Избранные</span>{' '}
                <span>проекты</span>
            </TextHero>
            <Styled.CardsWrapper>
                {projectCards.map((card, index) => (
                    <ProjectCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        projectName={card.projectName}
                        projectLogo={card.projectLogo}
                        description={card.description}
                        stack={card.stack}
                        screenshot={card.screenshot}
                        flipSides={index % 2 !== 0}
                    />
                ))}
                <ToTopButton />
            </Styled.CardsWrapper>
        </>
    );
};

export default Projects;
