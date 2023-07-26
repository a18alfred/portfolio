import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TITLE_FULL_NAME } from '../../../../shared/config/global';
import Description from './Slides/Description/Description';
import Skills from './Slides/Skills/Skills';
import Experience from './Slides/Experience/Experience';
import Contact from './Slides/Contact/Contact';
import TextHero from '../TextHero/TextHero';

/**
 Renders the about page of the website.
 @function
 @returns {JSX.Element} - About page JSX
 */
const About: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{`Обо мне | ${TITLE_FULL_NAME}`}</title>
            </Helmet>
            <TextHero
                subtitle={'Проектирование и создание интуитивно понятных и масштабируемых веб-продуктов - мое призвание.'}
            >
                <span className={'text-gradient'}>Full-stack</span>{' '}
                <span>разработчик</span>
            </TextHero>
            <Description />
            <Skills />
            <Experience />
            <Contact />
        </>
    );
};

export default About;
