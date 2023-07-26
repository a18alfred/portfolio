import React from 'react';
import { render, screen } from '@testing-library/react';
import Decisions from './Decisions';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Decisions component', () => {
    const decisions = ['Decision 1', 'Decision 2'];
    const screenshot = 'path/to/screenshot.png';

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
                <Decisions decisions={decisions} screenshot={screenshot} />
            )
        );
    });

    it('displays the screenshot', () => {
        render(
            withReduxAndStyledProviders(
                <Decisions decisions={decisions} screenshot={screenshot} />
            )
        );
        const screenshotElement = screen.getByAltText('Cкриншот');
        expect(screenshotElement).toBeInTheDocument();
    });

    it('displays decision paragraphs correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Decisions decisions={decisions} screenshot={screenshot} />
            )
        );
        decisions.forEach((decision) => {
            const decisionElement = screen.getByText(decision);
            expect(decisionElement).toBeInTheDocument();
        });
    });
});
