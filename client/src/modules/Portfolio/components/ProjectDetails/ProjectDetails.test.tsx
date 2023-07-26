import React from 'react';
import { render, screen } from '@testing-library/react';
import * as router from 'react-router';
import ProjectDetails from './ProjectDetails';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

// Mock the projectDetailsById import
jest.mock('../../../settings/portfolioProjectDetails', () => ({
    projectDetailsById: {
        'some-project-id': {
            name: 'Test Project',
            description: ['This is a test project'],
            objectives: ['Objective 1', 'Objective 2'],
            decisions: ['Decision 1', 'Decision 2'],
            conclusions: ['Conclusion 1', 'Conclusion 2'],
            icon: 'path/to/icon',
            mainScreenShot: 'path/to/main-screenshot',
            phoneScreenShot: 'path/to/phone-screenshot',
            tabletScreenShot: 'path/to/tablet-screenshot',
            work: ['Some work information'],
            githubUrl: 'https://github.com/test-project',
            websiteUrl: 'https://test-project.com'
        }
    }
}));

describe('ProjectDetails component', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        // Mock the useParams and useNavigate implementation
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

    it('renders project details correctly', () => {
        jest.spyOn(router, 'useParams').mockReturnValue({ projectId: 'some-project-id' });

        render(withReduxAndStyledProviders(<ProjectDetails />));

        // Assert that the project details are rendered correctly
        expect(screen.getByText('Test Project')).toBeInTheDocument();
        expect(screen.getByText('This is a test project')).toBeInTheDocument();
        expect(screen.getByText('Objective 1')).toBeInTheDocument();
        expect(screen.getByText('Objective 2')).toBeInTheDocument();
        expect(screen.getByText('Decision 1')).toBeInTheDocument();
        expect(screen.getByText('Decision 2')).toBeInTheDocument();
        expect(screen.getByText('Conclusion 1')).toBeInTheDocument();
        expect(screen.getByText('Conclusion 2')).toBeInTheDocument();
    });

    it('navigates to portfolio/projects if projectId is invalid', () => {
        // Mock the projectDetailsById import to return undefined for the project
        jest.spyOn(router, 'useParams').mockReturnValue({ projectId: 'some-non-existing-project-id' });

        render(withReduxAndStyledProviders(<ProjectDetails />));

        // Assert that useNavigate is called with the correct path
        expect(navigate).toHaveBeenCalledWith('portfolio/projects');
    });
});
