import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Logo component', () => {
    it('renders the logo correctly', () => {
        render(withReduxAndStyledProviders(<Logo />));

        const logoContainer = screen.getByTestId('logo-container');
        expect(logoContainer).toBeInTheDocument();

        const customLink = screen.getByTestId('logo-custom-link');
        expect(customLink).toBeInTheDocument();
    });
});
