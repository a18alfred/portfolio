import React from 'react';
import { render, screen } from '@testing-library/react';
import Objectives from './Objectives';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Objectives component', () => {
    const mockProps = {
        objectives: ['Objective 1', 'Objective 2'],
        screenshot: 'screenshot-url'
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
            withReduxAndStyledProviders(
                <Objectives {...mockProps} />
            )
        );
    });

    it('displays the screenshot correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Objectives {...mockProps} />
            )
        );
        const screenshotImage = screen.getByAltText('Cкриншот');
        expect(screenshotImage).toBeInTheDocument();
    });

    it('displays the objectives paragraphs correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Objectives {...mockProps} />
            )
        );
        const objective1 = screen.getByText('Objective 1');
        const objective2 = screen.getByText('Objective 2');
        expect(objective1).toBeInTheDocument();
        expect(objective2).toBeInTheDocument();
    });
});
