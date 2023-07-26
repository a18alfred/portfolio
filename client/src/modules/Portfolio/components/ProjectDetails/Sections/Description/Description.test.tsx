import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './Description';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Description component', () => {
    const mockProps = {
        name: 'Project Name',
        description: ['Description paragraph 1', 'Description paragraph 2'],
        icon: 'icon-url',
        work: ['Work item 1', 'Work item 2'],
        githubUrl: 'github-url',
        websiteUrl: 'website-url'
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
                <Description {...mockProps} />
            )
        );
    });

    it('displays the project name correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Description {...mockProps} />
            )
        );
        const nameElement = screen.getByText('Project Name');
        expect(nameElement).toBeInTheDocument();
    });

    it('displays the description paragraphs correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Description {...mockProps} />
            )
        );
        const descriptionParagraph1 = screen.getByText('Description paragraph 1');
        const descriptionParagraph2 = screen.getByText('Description paragraph 2');
        expect(descriptionParagraph1).toBeInTheDocument();
        expect(descriptionParagraph2).toBeInTheDocument();
    });

    it('displays the work items correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Description {...mockProps} />
            )
        );
        const workItem1 = screen.getByText('Work item 1');
        const workItem2 = screen.getByText('Work item 2');
        expect(workItem1).toBeInTheDocument();
        expect(workItem2).toBeInTheDocument();
    });

    it('renders the website and GitHub links correctly', () => {
        render(
            withReduxAndStyledProviders(
                <Description {...mockProps} />
            )
        );
        const websiteLink = screen.getByRole('link', { name: 'Вебсайт' });
        const githubLink = screen.getByRole('link', { name: 'Github' });
        expect(websiteLink).toHaveAttribute('href', 'website-url');
        expect(githubLink).toHaveAttribute('href', 'github-url');
    });
});
