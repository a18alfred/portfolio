import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('ExperienceCard component', () => {
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

    const mockExperience = {
        date: '2022 - Present',
        title: 'Software Engineer',
        company_name: 'ABC Company',
        icon: 'logo.png',
        points: ['Point 1', 'Point 2'],
        additional: [
            {
                name: 'Additional Info 1',
                points: ['Additional Point 1', 'Additional Point 2']
            },
            {
                name: 'Additional Info 2',
                points: ['Additional Point 3', 'Additional Point 4']
            }
        ]
    };

    it('renders experience title and company name correctly', () => {
        render(withReduxAndStyledProviders(<ExperienceCard experience={mockExperience} />));

        const titleElement = screen.getByText('Software Engineer');
        const companyNameElement = screen.getByText('ABC Company');

        expect(titleElement).toBeInTheDocument();
        expect(companyNameElement).toBeInTheDocument();
    });

    it('renders experience points correctly', () => {
        render(withReduxAndStyledProviders(<ExperienceCard experience={mockExperience} />));

        const point1Element = screen.getByText('Point 1');
        const point2Element = screen.getByText('Point 2');

        expect(point1Element).toBeInTheDocument();
        expect(point2Element).toBeInTheDocument();
    });

    it('renders additional info correctly', () => {
        render(withReduxAndStyledProviders(<ExperienceCard experience={mockExperience} />));

        const additionalInfo1Element = screen.getByText('Additional Info 1');
        const additionalInfo2Element = screen.getByText('Additional Info 2');
        const additionalPoint1Element = screen.getByText('Additional Point 1');
        const additionalPoint2Element = screen.getByText('Additional Point 2');
        const additionalPoint3Element = screen.getByText('Additional Point 3');
        const additionalPoint4Element = screen.getByText('Additional Point 4');

        expect(additionalInfo1Element).toBeInTheDocument();
        expect(additionalInfo2Element).toBeInTheDocument();
        expect(additionalPoint1Element).toBeInTheDocument();
        expect(additionalPoint2Element).toBeInTheDocument();
        expect(additionalPoint3Element).toBeInTheDocument();
        expect(additionalPoint4Element).toBeInTheDocument();
    });
});
