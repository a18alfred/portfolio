import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

// Mocked projectCards data
jest.mock('../../../settings/portfolioProjectCards', () => ({
    projectCards: [
        {
            id: 1,
            title: 'Project Title 1',
            projectName: 'Project Name 1',
            projectLogo: 'logo1.png',
            description: 'Description 1',
            stack: ['Tech 1', 'Tech 2'],
            screenshot: 'screenshot1.png'
        },
        {
            id: 2,
            title: 'Project Title 2',
            projectName: 'Project Name 2',
            projectLogo: 'logo2.png',
            description: 'Description 2',
            stack: ['Tech 3', 'Tech 4'],
            screenshot: 'screenshot2.png'
        }
    ]
}));

describe('Projects component', () => {
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
        render(withReduxAndStyledProviders(<Projects />));
    });

    it('displays the subtitle correctly', () => {
        render(withReduxAndStyledProviders(<Projects />));
        const subtitleElement = screen.getByText(
            'Из-за соглашений о неразглашении я ограничен личными проектами и некоторыми завершёнными заказами, над которыми я работал в прошлом.'
        );
        expect(subtitleElement).toBeInTheDocument();
    });

    it('displays the project cards correctly', () => {
        render(withReduxAndStyledProviders(<Projects />));

        const projectCards = screen.getAllByRole('article');
        expect(projectCards.length).toBe(2);

        const projectTitle1 = screen.getByText('Project Title 1');
        expect(projectTitle1).toBeInTheDocument();

        const projectName1 = screen.getByText('Project Name 1');
        expect(projectName1).toBeInTheDocument();
        const projectTitle2 = screen.getByText('Project Title 2');
        expect(projectTitle2).toBeInTheDocument();

        const projectName2 = screen.getByText('Project Name 2');
        expect(projectName2).toBeInTheDocument();
    });
});
