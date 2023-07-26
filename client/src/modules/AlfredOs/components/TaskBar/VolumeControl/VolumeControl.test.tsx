import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VolumeControl } from './VolumeControl';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

const setVolumeMock = jest.fn();
const playMock = jest.fn();

jest.mock('../../../../hooks/useVolume', () => ({
    useVolume: jest.fn(() => ({
        volume: 0.5,
        setVolume: setVolumeMock
    }))
}));

jest.mock('../../../../hooks/useAudio', () => ({
    useAudio: jest.fn(() => ({
        play: playMock
    }))
}));

describe('VolumeControl', () => {
    it('should render the component', () => {
        render(withReduxAndStyledProviders(<VolumeControl />));
    });

    it('should call setVolume and play when handle is released', () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<VolumeControl />));
        const sliderHandle = getByTestId('slider-handle');

        fireEvent.mouseDown(sliderHandle);
        fireEvent.mouseUp(sliderHandle);

        expect(setVolumeMock).toHaveBeenCalledTimes(1);
        expect(playMock).toHaveBeenCalledTimes(1);
    });
});
