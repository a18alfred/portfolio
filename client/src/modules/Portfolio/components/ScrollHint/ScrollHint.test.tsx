import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollHint from './ScrollHint';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('ScrollHint component', () => {
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
        render(withReduxAndStyledProviders(<ScrollHint />));
        const scrollHintElement = screen.getByTestId('scroll-hint');
        expect(scrollHintElement).toBeInTheDocument();
    });

    it('hides the scroll hint when the page is not at the top', () => {
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
        render(withReduxAndStyledProviders(<ScrollHint />));
        const scrollHintElement = screen.getByTestId('scroll-hint');
        expect(scrollHintElement).toHaveStyle({ opacity: '0' });
    });

    it('shows the scroll hint when page is at the top', () => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
        render(withReduxAndStyledProviders(<ScrollHint />));
        const scrollHintElement = screen.getByTestId('scroll-hint');
        expect(scrollHintElement).toHaveStyle({ opacity: 1 });
    });
});
