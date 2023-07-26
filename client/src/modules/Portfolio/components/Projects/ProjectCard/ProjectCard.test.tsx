import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('ProjectCard component', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in the test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    const mockProps = {
        id: 1,
        title: 'Sample Project',
        projectName: 'Sample Project Name',
        projectLogo: 'logo.png',
        description: 'Sample project description',
        stack: 'React, Redux',
        screenshot: 'screenshot.png',
        flipSides: false
    };

    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const projectCardElement = screen.getByRole('article');
        expect(projectCardElement).toBeInTheDocument();
    });

    it('displays project title correctly', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const titleElement = screen.getByText(mockProps.title);
        expect(titleElement).toBeInTheDocument();
    });

    it('displays project name correctly', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const projectNameElement = screen.getByText(mockProps.projectName);
        expect(projectNameElement).toBeInTheDocument();
    });

    it('displays project description correctly', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const descriptionElement = screen.getByText(mockProps.description);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('displays project stack correctly', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const stackElement = screen.getByText(`${mockProps.stack}`);
        expect(stackElement).toBeInTheDocument();
    });

    it('displays project screenshot correctly', () => {
        render(withReduxAndStyledProviders(<ProjectCard {...mockProps} />));
        const screenshotElement = screen.getAllByAltText('Скриншот');
        expect(screenshotElement.length).toBe(2);
    });
});
