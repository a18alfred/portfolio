import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Button component', () => {
    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<Button />));
    });

    it('renders with icon', () => {
        const { getByRole } = render(withReduxAndStyledProviders(<Button icon='searchIcon' />));
        const iconElement = getByRole('img');
        expect(iconElement).toBeInTheDocument();
    });

    it('renders with text', () => {
        const { getByText } = render(withReduxAndStyledProviders(<Button text='Click me!' />));
        const textElement = getByText('Click me!');
        expect(textElement).toBeInTheDocument();
    });
});