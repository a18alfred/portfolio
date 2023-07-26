import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Conclusions from './Conclusions';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';
import * as router from 'react-router';

describe('Conclusions component', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(
            withReduxAndStyledProviders(
                <Conclusions conclusions={['Conclusion 1', 'Conclusion 2']} screenshot='screenshot.png' />
            )
        );
        // Assert that the component renders without throwing any errors
    });

    it('displays the conclusions correctly', () => {
        const conclusions = ['Conclusion 1', 'Conclusion 2'];

        render(
            withReduxAndStyledProviders(
                <Conclusions conclusions={conclusions} screenshot='screenshot.png' />
            )
        );

        // Assert that all conclusions paragraphs are rendered
        conclusions.forEach((conclusion) => {
            const conclusionElement = screen.getByText(conclusion);
            expect(conclusionElement).toBeInTheDocument();
        });
    });

    it('calls the onProjects function when the button is clicked', () => {
        render(
            withReduxAndStyledProviders(
                <Conclusions conclusions={['Conclusion 1', 'Conclusion 2']} screenshot='screenshot.png' />
            )
        );

        const buttonElement = screen.getByText('Список работ');

        fireEvent.click(buttonElement);

        expect(navigate).toHaveBeenCalledWith('/portfolio/projects');
    });
});
