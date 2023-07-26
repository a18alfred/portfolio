import React from 'react';
import * as Styled from './Logo.styles';

/**
 *Renders my animated logo
 *@function Logo
 *@returns {JSX.Element}
 */
const Logo: React.FC = React.memo(() => {
    return (
        <Styled.Container data-testid='logo-container'>
            <span className={'letter'}>A</span>
            <span className={'letter'}>L</span>
            <span className={'letter'}>F</span>
            <span className={'main-letter'}>R</span>
            <span className={'letter'}>E</span>
            <span className={'letter'}>D</span>
            <Styled.CustomLink to={'/portfolio'} data-testid='logo-custom-link' />
        </Styled.Container>
    );
});

export default Logo;
