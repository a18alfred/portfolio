import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sound from './Sound';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('Sound', () => {
    it('should render the component', () => {
        render(withReduxAndStyledProviders(<Sound />));
    });

    it('should open the volume control on click', () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<Sound />));
        const soundContainer = getByTestId('sound-container');

        fireEvent.mouseDown(soundContainer);

        const volumeControl = getByTestId('volume-control');
        expect(volumeControl).toBeInTheDocument();
    });
});
