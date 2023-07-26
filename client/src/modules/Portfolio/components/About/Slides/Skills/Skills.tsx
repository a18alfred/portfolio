import React from 'react';
import * as Styled from './Skills.styles';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import { categories, skills } from '../../../../config/portfolioSkills';
import Skill from '../../../Skill/Skill';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import AnimationSlide from '../../../AnimationSlide/AnimationSlide';

/**
 Renders skills part of about page.
 @function
 @returns {JSX.Element} - Skills page JSX
 */
const Skills: React.FC = () => {
    return (
        <Styled.Container id={'skills'} data-testid='skills'>
            <AnimatedTextHeader
                size={'small'}
                margin={'0 0 3rem 0'}
                animationDuration={1}
            >
                Навыки
            </AnimatedTextHeader>
            {
                categories.map((category) => (
                    <React.Fragment key={category.id}>
                        <AnimatedTextParagraph
                            margin={'0 0 0.5rem 0'}
                            withDarkColor={true}
                            size={'large'}
                            animationDuration={0.7}
                        >
                            <span>{category.name}</span>
                            <Styled.NameDivider />
                        </AnimatedTextParagraph>
                        <AnimationSlide>

                            <Styled.SkillsWrapper>
                                {
                                    skills[category.id].map((skill, index) => (
                                        <Skill
                                            key={skill.name}
                                            icon={skill.icon}
                                            name={skill.name}
                                            index={index}
                                        />
                                    ))
                                }
                            </Styled.SkillsWrapper>
                        </AnimationSlide>
                    </React.Fragment>
                ))
            }
        </Styled.Container>
    );
};

export default Skills;
