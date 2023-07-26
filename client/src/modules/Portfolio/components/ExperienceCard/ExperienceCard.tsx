import React, { Fragment } from 'react';
import {
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import * as Styled from './ExperienceCard.styles';
import { IExperience } from '../../config/portfolioExperience';
import { portfolioStyles } from '../../../../shared/theme/variables';

interface ExperienceCardProps {
    experience: IExperience;
}

/**
 Represents an experience card for the portfolio.
 @param {object} experience - The experience data.
 @returns {JSX.Element} The experience card component.
 */
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: portfolioStyles.secondaryBg,
                color: portfolioStyles.text.primary
            }}
            contentArrowStyle={{ borderRight: 'none' }}
            date={experience.date}
            iconStyle={{ background: portfolioStyles.bgColor }}
            icon={
                <Styled.IconWrapper>
                    <img
                        src={experience.icon}
                        alt={'logo'}
                    />
                </Styled.IconWrapper>
            }
        >
            <Styled.ExperienceWrapper>
                <Styled.ExperienceHeaders>
                    <h3>{experience.title}</h3>
                    <p>{experience.company_name}</p>
                </Styled.ExperienceHeaders>
                <Styled.ExperienceList>
                    {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`}>{point}</li>
                    ))}
                </Styled.ExperienceList>
                {
                    !!experience.additional.length &&
                    <Styled.AdditionalInfo>
                        {experience.additional.map((additional, index) => (
                            <Fragment key={`additional-${index}`}>
                                <p>{additional.name}</p>
                                {
                                    !!additional.points.length &&
                                    <Styled.ExperienceList>
                                        {additional.points.map((point, index) => (
                                            <li key={`additional-point-${index}`}>{point}</li>
                                        ))}
                                    </Styled.ExperienceList>
                                }
                            </Fragment>
                        ))}
                    </Styled.AdditionalInfo>
                }
            </Styled.ExperienceWrapper>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
