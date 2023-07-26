import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './Description';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Description component', () => {
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
        render(withReduxAndStyledProviders(<Description />));
        const descriptionElement = screen.getByTestId('description');
        expect(descriptionElement).toBeInTheDocument();
    });
});
