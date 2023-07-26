import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioLanding from './PortfolioLanding';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('PortfolioLanding component', () => {
    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<PortfolioLanding />));
        const containerElement = screen.getByTestId('portfolio-landing');
        expect(containerElement).toBeInTheDocument();
    });

    it('displays navigation links correctly', () => {
        render(withReduxAndStyledProviders(<PortfolioLanding />));
        const aboutLinkElement = screen.getByText('Обо мне');
        const projectsLinkElement = screen.getByText('Работы');
        const contactLinkElement = screen.getByText('Контакты');

        expect(aboutLinkElement).toBeInTheDocument();
        expect(projectsLinkElement).toBeInTheDocument();
        expect(contactLinkElement).toBeInTheDocument();
    });
});
