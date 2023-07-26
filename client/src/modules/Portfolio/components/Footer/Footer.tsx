import React from 'react';
import * as Styled from './Footer.styles';
import { TITLE_FULL_NAME } from '../../../../shared/config/global';

/**
 Renders the footer component of the website.
 @function
 @returns {JSX.Element} - Footer component JSX
 */
const Footer = () => {
    return (
        <Styled.Container>
            <Styled.WebsiteRights>
                © {new Date().getFullYear()} {TITLE_FULL_NAME}. {'Все права защищены.'}
            </Styled.WebsiteRights>
        </Styled.Container>
    );
};

export default Footer;
