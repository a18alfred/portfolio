import React from 'react';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Skill component', () => {
    const mockSkill = {
        icon: () => <div data-testid='icon' />,
        name: 'Test Skill',
        index: 0
    };

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
        render(
            withReduxAndStyledProviders(<Skill {...mockSkill} />)
        );
        const skillElement = screen.getByTestId('skill');
        expect(skillElement).toBeInTheDocument();
    });

    it('renders the skill icon', () => {
        render(
            withReduxAndStyledProviders(<Skill {...mockSkill} />)
        );
        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });

    it('displays the skill name', () => {
        render(
            withReduxAndStyledProviders(<Skill {...mockSkill} />)
        );
        const nameElement = screen.getByText('Test Skill');
        expect(nameElement).toBeInTheDocument();
    });
});
