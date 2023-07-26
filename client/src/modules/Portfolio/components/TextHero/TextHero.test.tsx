import React from 'react';
import { render, screen } from '@testing-library/react';
import TextHero from './TextHero';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('TextHero component', () => {
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

    it('renders TextHero without crashing', () => {
        const headerText = 'Welcome to my portfolio';

        render(
            withReduxAndStyledProviders(
                <TextHero>{headerText}</TextHero>
            )
        );

        // Assert header text is rendered
        const headerElement = screen.getByText(headerText);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders subtitle when provided', () => {
        const headerText = 'Welcome to my portfolio';
        const subtitleText = 'Discover my work and achievements';

        render(
            withReduxAndStyledProviders(
                <TextHero subtitle={subtitleText}>{headerText}</TextHero>
            )
        );

        // Assert subtitle text is rendered
        const subtitleElement = screen.getByText(subtitleText);
        expect(subtitleElement).toBeInTheDocument();
    });
});
