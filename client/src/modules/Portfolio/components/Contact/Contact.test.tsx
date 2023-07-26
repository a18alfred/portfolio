import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Contact component', () => {
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

    it('renders the subtitle correctly', () => {
        render(withReduxAndStyledProviders(<Contact />));
        const subtitleElement = screen.getByText('Создайте сильную команду и добейтесь успеха.');
        expect(subtitleElement).toBeInTheDocument();
    });

    it('renders the text hero correctly', () => {
        render(withReduxAndStyledProviders(<Contact />));
        const textHeroElement = screen.getByText('Команда');
        expect(textHeroElement).toBeInTheDocument();
    });

    it('renders the Message component', () => {
        render(withReduxAndStyledProviders(<Contact />));
        const messageComponent = screen.getByTestId('message-component');
        expect(messageComponent).toBeInTheDocument();
    });
});