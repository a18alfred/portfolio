import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedImage, { Props } from './AnimatedImage';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('AnimatedImage component', () => {
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

    it('renders a placeholder image when the main image is not loaded', () => {
        const src = 'image.jpg';
        const alt = 'Image alt text';
        const animationDuration = 1;
        const props: Props = {
            src,
            alt,
            animationDuration
        };
        render(withReduxAndStyledProviders(<AnimatedImage {...props} />));

        const placeholderImage = screen.getByAltText(alt);
        expect(placeholderImage).toBeInTheDocument();
        expect(placeholderImage.getAttribute('src')).toBe(
            'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 3 4\'%3E%3C/svg%3E'
        );
    });
});
