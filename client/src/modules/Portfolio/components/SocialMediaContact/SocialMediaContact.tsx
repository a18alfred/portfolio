import React, { ReactNode } from 'react';
import * as Styled from './SocialMediaContact.styles';
import AnimationSlide from '../AnimationSlide/AnimationSlide';

export interface Props {
    icon: ReactNode;
    href: string;
    size: 'standard' | 'large';
}

/**
 *Renders social medial link with icon
 *@function SocialMediaContact
 *@param {ReactNode} icon - icon to be rendered in contact
 *@param {string} text - link text
 * @param {string} size - specifies size to be applied
 *@param {string} href - social media href
 *@returns {JSX.Element} - Rendered SocialMediaContact component
 */
const SocialMediaContact: React.FC<Props> = ({ icon, size, href }) => {
    return (
        <AnimationSlide>
            <Styled.Container
                href={href}
                target='_blank'
                size={size}
                rel='noopener'>
                {icon}
            </Styled.Container>
        </AnimationSlide>
    );
};

export default SocialMediaContact;
