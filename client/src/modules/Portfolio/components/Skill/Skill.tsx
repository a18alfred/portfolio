import React from 'react';
import * as Styled from './Skill.styles';
import { ISkill } from '../../config/portfolioSkills';

interface SkillProps extends ISkill {
    index: number;
}

/**
 * Renders skill card.
 * @function
 * @param {ReactNode} icon - Icon component.
 * @param {string} name - Skill name.
 * @param {number} index - Index of component.
 * @returns {JSX.Element} - Skill JSX
 */
const Skill: React.FC<SkillProps> = ({ icon, name, index }) => {
    const Icon = icon;
    return (
        <Styled.Container
            data-testid='skill'
            delay={0.05 * index}
        >
            <Icon />
            <p>{name}</p>
        </Styled.Container>
    );
};

export default Skill;
