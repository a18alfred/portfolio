import React from 'react';
import { render } from '@testing-library/react';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';
import Contact from './Contact';


describe('Contact', () => {
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

    it('should render the contact section with correct email', () => {
        const { getByText } = render(withReduxAndStyledProviders(<Contact />));

        const emailElement = getByText('a18alfred@yandex.ru');
        expect(emailElement).toBeInTheDocument();
    });
});