import React from 'react';
import * as Styled from './Experience.styles';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import {
    VerticalTimeline
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../../../config/portfolioExperience';
import ExperienceCard from '../../../ExperienceCard/ExperienceCard';

/**
 Renders Experience part of about page.
 @function
 @returns {JSX.Element} - Experience JSX
 */
const Experience = () => {
    return (
        <Styled.Container id={'experience'} data-testid='experience'>
            <AnimatedTextHeader
                size={'small'}
                margin={'0 0 3rem 0'}
                animationDuration={0.5}
            >
                Опыт работы
            </AnimatedTextHeader>
            <Styled.ExperienceWrapper>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </Styled.ExperienceWrapper>

        </Styled.Container>
    );
};

export default Experience;
