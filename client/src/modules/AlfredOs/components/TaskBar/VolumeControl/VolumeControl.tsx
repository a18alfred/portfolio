import React from 'react';
import { useAudio } from '../../../hooks/useAudio';
import { useVolume } from '../../../hooks/useVolume';
import { Slider } from '../../General';
import * as Styled from './VolumeControl.styles';
import { Sounds } from '../../Audio/Sounds';

/**
 VolumeControl component that allows the user to adjust the volume of the system.
 @returns React component
 */
export const VolumeControl: React.FC = () => {
    const { volume, setVolume } = useVolume();
    const { play } = useAudio();

    const onHandleRelease = (value: number) => {
        setVolume(value);
        play(Sounds.ding, value);
    };

    return (
        <Styled.VolumeControlStyled
            data-testid='volume-control'
        >
            <p>Громк</p>
            <Slider
                min={0}
                max={1}
                value={volume}
                onHandleRelease={onHandleRelease}
            />
        </Styled.VolumeControlStyled>
    );
};
