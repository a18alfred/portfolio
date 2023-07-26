import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavMenu from './NavMenu';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

jest.mock('@react-hook/media-query', () => ({
    useMediaQuery: () => true
}));

// Mocked navMenuLinks
jest.mock('../../../settings/portfolioNavMenu', () => ({
    navMenuLinks: [
        { id: 1, href: '/home', linkText: 'Home', onlyDesktop: false, newTab: false },
        { id: 2, href: '/about', linkText: 'About', onlyDesktop: false, newTab: false },
        { id: 3, href: '/contact', linkText: 'Contact', onlyDesktop: false, newTab: false }
    ]
}));

describe('NavMenu component', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<NavMenu />));
        const navMenuContainer = screen.getByTestId('nav-menu-container');
        expect(navMenuContainer).toBeInTheDocument();
    });

    it('toggles the menu when clicked', () => {
        render(withReduxAndStyledProviders(<NavMenu />));
        const navMenuContainer = screen.getByTestId('nav-menu-container');

        const hamburgerIcon = screen.getByTestId('nav-menu-hamburger');

        expect(hamburgerIcon).not.toHaveClass('active-one');

        fireEvent.click(navMenuContainer);

        expect(hamburgerIcon).toHaveClass('active-one');
    });
});
