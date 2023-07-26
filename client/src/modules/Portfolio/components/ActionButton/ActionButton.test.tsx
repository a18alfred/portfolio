import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionButton, { Props } from './ActionButton';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('ActionButton component', () => {
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

    it('renders button text correctly', () => {
        const buttonText = 'Click me';
        const icon = <i className='fa fa-check' />;
        render(withReduxAndStyledProviders(<ActionButton icon={icon} buttonText={buttonText} />));

        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
    });
});
