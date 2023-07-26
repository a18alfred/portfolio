import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioLayout from './PortfolioLayout';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

jest.mock('@react-hook/media-query', () => ({
    useMediaQuery: () => true
}));

describe('PortfolioLayout component', () => {
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

    it('renders navigation bar, content area, and footer', () => {
        render(
            withReduxAndStyledProviders(<PortfolioLayout />)
        );

        // Assert NavBar component is rendered
        const navBarElement = screen.getByRole('navigation');
        expect(navBarElement).toBeInTheDocument();

        // Assert content area is rendered
        const contentElement = screen.getByRole('main');
        expect(contentElement).toBeInTheDocument();

        // Assert Footer component is rendered
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });
});
