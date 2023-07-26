import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedTextHeader from './AnimatedTextHeader';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('AnimatedTextHeader component', () => {
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
        render(
            withReduxAndStyledProviders(<AnimatedTextHeader margin='0' size='large'
                                                            animationDuration={0.1} />)
        );
        const headerElement = screen.getByRole('heading');
        expect(headerElement).toBeInTheDocument();
    });

    it('displays header text correctly', () => {
        const headerText = 'Hello World';
        render(
            withReduxAndStyledProviders(<AnimatedTextHeader margin='0' size='large' headerText={headerText}
                                                            animationDuration={0.1} />)
        );
        const headerElement = screen.getByText(headerText);
        expect(headerElement).toBeInTheDocument();
    });
});