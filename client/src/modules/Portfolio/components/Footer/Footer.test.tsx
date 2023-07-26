import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Footer component', () => {
    it('renders the footer text correctly', () => {
        render(withReduxAndStyledProviders(<Footer />));

        const footerText = screen.getByText(/Все права защищены/i);
        expect(footerText).toBeInTheDocument();
    });

    it('displays the current year in the footer text', () => {
        render(withReduxAndStyledProviders(<Footer />));

        const currentYear = new Date().getFullYear();
        const yearText = screen.getByText(new RegExp(currentYear.toString()));
        expect(yearText).toBeInTheDocument();
    });
});
