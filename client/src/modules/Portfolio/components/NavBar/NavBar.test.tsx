import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

jest.mock('@react-hook/media-query', () => ({
    useMediaQuery: () => true
}));

describe('NavBar component', () => {
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
        render(withReduxAndStyledProviders(<NavBar />));
        const navBarElement = screen.getByRole('navigation');
        expect(navBarElement).toBeInTheDocument();
    });

    it('renders the Logo component', () => {
        render(withReduxAndStyledProviders(<NavBar />));
        const logoElement = screen.getByTestId('logo-container');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the NavMenu component', () => {
        render(withReduxAndStyledProviders(<NavBar />));
        const navMenuElement = screen.getByTestId('nav-menu-container');
        expect(navMenuElement).toBeInTheDocument();
    });
});
