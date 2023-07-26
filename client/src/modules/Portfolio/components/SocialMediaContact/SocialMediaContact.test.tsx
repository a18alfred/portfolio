import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialMediaContact from './SocialMediaContact';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('SocialMediaContact component', () => {
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

    it('renders the social media link without crashing', () => {
        render(withReduxAndStyledProviders(<SocialMediaContact
                icon={<span data-testid='icon' />}
                size='standard'
                href='https://example.com'
            />)
        );

        const linkElement = screen.getByRole('link');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });

    it('renders the social media icon', () => {
        render(withReduxAndStyledProviders(<SocialMediaContact
                icon={<span data-testid='icon' />}
                size='standard'
                href='https://example.com'
            />)
        );

        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });

    it('renders the social media link with the specified size', () => {
        render(withReduxAndStyledProviders(<SocialMediaContact
                icon={<span data-testid='icon' />}
                size='large'
                href='https://example.com'
            />)
        );

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveStyle('font-size: "3rem"');
    });
});
