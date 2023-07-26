import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Start from './Start';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('Start', () => {
    it('should render the component', () => {
        render(withReduxAndStyledProviders(<Start />));
    });

    it('should open the start window on click', () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<Start />));
        const startContainer = getByTestId('start-container');

        fireEvent.mouseDown(startContainer);

        // Assert that the start window is open
        const startWindow = getByTestId('start-window');
        expect(startWindow).toBeInTheDocument();
    });

    it('should close the start window when clicking outside', () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<Start />));
        const startContainer = getByTestId('start-container');

        fireEvent.mouseDown(startContainer);

        const startWindow = getByTestId('start-window');

        fireEvent.mouseDown(startContainer);
        fireEvent.mouseDown(document.body);

        expect(startWindow).not.toBeInTheDocument();
    });
});
