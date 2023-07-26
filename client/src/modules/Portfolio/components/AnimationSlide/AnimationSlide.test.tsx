import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimationSlide from './AnimationSlide';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('AnimationSlide component', () => {
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

    it('renders children when on screen', () => {
        render(
            withReduxAndStyledProviders(
                <AnimationSlide>
                    <div>Child Component</div>
                </AnimationSlide>
            )
        );

        const childElement = screen.getByText('Child Component');
        expect(childElement).toBeInTheDocument();
    });
});
