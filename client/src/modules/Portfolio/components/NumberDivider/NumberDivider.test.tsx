import React from 'react';
import { render, screen } from '@testing-library/react';
import NumberDivider from './NumberDivider';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('NumberDivider component', () => {
    beforeEach(() => {
        // Mock IntersectionObserver
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('renders the component without crashing', () => {
        render(
            withReduxAndStyledProviders(<NumberDivider number={5} />)
        );
        const numberElement = screen.getByText('05'); // Assuming the initial number is 5
        expect(numberElement).toBeInTheDocument();
    });

    it('displays the correct number', () => {
        const number = 10;
        render(
            withReduxAndStyledProviders(<NumberDivider number={number} />)
        );
        const numberElement = screen.getByText('10');
        expect(numberElement).toBeInTheDocument();
    });
});
