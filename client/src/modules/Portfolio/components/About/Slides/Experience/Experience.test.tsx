import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Experience component', () => {
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
        render(withReduxAndStyledProviders(<Experience />));
        const experienceElement = screen.getByTestId('experience');
        expect(experienceElement).toBeInTheDocument();
    });
});
