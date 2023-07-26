import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToTopButton from './ToTopButton';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('ToTopButton component', () => {
    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<ToTopButton />));
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('scrolls to top when clicked', () => {
        render(withReduxAndStyledProviders(<ToTopButton />));
        const buttonElement = screen.getByRole('button');

        // Mock the window.scrollTo method
        window.scrollTo = jest.fn();

        fireEvent.click(buttonElement);
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});
