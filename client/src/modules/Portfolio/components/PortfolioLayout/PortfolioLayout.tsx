import React from 'react';
import * as Styled from './PortfolioLayout.styles';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

/**
 * A layout component that displays a navigation bar, content area, and footer.
 *@function PortfolioLayout
 *@returns {JSX.Element}
 */
const PortfolioLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Styled.Container>
                <Outlet />
            </Styled.Container>
            <Footer />
        </>
    );
};

export default PortfolioLayout;
