import React from 'react';
import { render } from '@testing-library/react';
import WelcomePage from './WelcomePage';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('WelcomePage component', () => {
    it('renders without error', () => {
        const { getByText } = render(withReduxAndStyledProviders(<WelcomePage />));
        expect(getByText('Альфред Мирзасалихов')).toBeInTheDocument();
    });
});