import React from 'react';
import { render } from '@testing-library/react';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';
import About from './About';

jest.mock('../../../settings/portfolioSkills', () => ({
    categories: [{ id: '1', name: 'Category 1' }],
    skills: {
        '1': [
            { name: 'Skill 1', icon: () => <div>Icon 1</div> }
        ]
    }
}));

describe('About', () => {
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

    it('should render the about page with correct subtitle', () => {
        const { getByText } = render(
            withReduxAndStyledProviders(
                <About />
            )
        );
        const subtitleElement = getByText('Проектирование и создание интуитивно понятных и масштабируемых веб-продуктов - мое призвание.');
        expect(subtitleElement).toBeInTheDocument();
    });
});
