import React from 'react';
import * as Styled from './NavBar.styles';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';

/**
 * Renders NavBar on the top of the page
 *@function Navbar
 *@returns {JSX.Element}
 */
const NavBar: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Logo />
                <NavMenu />
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default NavBar;
