import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

jest.mock('../../../../../settings/portfolioSkills', () => ({
    categories: [{ id: '1', name: 'Category 1' }],
    skills: {
        '1': [
            { name: 'Skill 1', icon: () => <div>Icon 1</div> }
        ]
    }
}));

describe('Skills component', () => {
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
        render(withReduxAndStyledProviders(<Skills />));

        const skillsElement = screen.getByTestId('skills');
        expect(skillsElement).toBeInTheDocument();
    });

    it('displays category name correctly', () => {
        render(withReduxAndStyledProviders(<Skills />));

        const categoryElement = screen.getByText('Category 1');
        expect(categoryElement).toBeInTheDocument();
    });

    it('displays skill name correctly', () => {
        render(withReduxAndStyledProviders(<Skills />));

        const skillElement = screen.getByText('Skill 1');
        expect(skillElement).toBeInTheDocument();
    });
});
