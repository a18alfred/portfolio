import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../../General';
import { VolumeControl } from '../VolumeControl/VolumeControl';
import { useVolume } from '../../../hooks/useVolume';

const Sound = () => {
    const { volume } = useVolume();
    const lastClickInside = useRef(false);
    const [isOpen, setIsOpen] = useState(false);

    const onVolumeClicked = () => {
        setIsOpen(true);
        lastClickInside.current = true;
    };

    const onCheckClick = () => {
        if (lastClickInside.current) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
        lastClickInside.current = false;
    };

    useEffect(() => {
        window.addEventListener('mousedown', onCheckClick, false);
        return () => {
            window.removeEventListener('mousedown', onCheckClick, false);
        };
    }, []);

    return (
        <div
            onMouseDown={onVolumeClicked}
            style={{ display: 'flex' }}
            data-testid='sound-container'
        >
            {isOpen && <VolumeControl />}
            {volume === 0 ? <Icon style={{ cursor: 'pointer', height: 16, marginTop: 0 }} icon='volumeOff' />
                : <Icon style={{ cursor: 'pointer', height: 16, marginTop: 0 }} icon='volumeOn' />}
        </div>
    );
};

export default Sound;
