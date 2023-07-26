import React, { useCallback, useEffect, useRef } from 'react';
import { clamp } from '../../../../../shared/utils/general';
import * as Styled from './Slider.styles';

export interface SliderProps {
    min: number;
    max: number;
    value?: number;
    onChange?: (value: number) => void;
    onHandleRelease?: (value: number) => void;
}

/**
 A slider component that allows the user to select a value within a range.
 @param {number} min - The minimum value of the range.
 @param {number} max - The maximum value of the range.
 @param {number} value - The initial value of the slider.
 @param {function} onChange - A callback function that is called when the value changes.
 @param {function} onHandleRelease - A callback function that is called when the handle is released.
 @returns {JSX.Element} - A slider component with a track and a handle that can be dragged to select a value.
 */
const Slider: React.FC<SliderProps> = ({
                                           min,
                                           max,
                                           value = 0,
                                           onChange,
                                           onHandleRelease
                                       }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const startPosition = useRef(0);
    const lastPosition = useRef(0);
    const maxPosition = useRef(0);
    const moveY = useRef(0);

    const setHandlePosition = (pos: number) => {
        if (handleRef.current) {
            handleRef.current.style.bottom = `${pos}px`;
        }
    };

    useEffect(() => {
        if (trackRef.current && handleRef.current) {
            const trackSize = trackRef.current.offsetHeight;
            const handleSize = handleRef.current.offsetHeight;
            maxPosition.current = trackSize - handleSize;
            startPosition.current = (value * maxPosition.current) / (max - min);
            lastPosition.current = startPosition.current;
            setHandlePosition(startPosition.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const calculateValue = (position: number) => (max - min) * (position / maxPosition.current);

    const onTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!handleRef.current) return;
        const trackRect = (e.target as HTMLDivElement).getBoundingClientRect();
        const position = -e.clientY + trackRect.bottom - handleRef.current.offsetHeight / 2;
        const positionClamped = clamp(position, 0, maxPosition.current);
        startPosition.current = positionClamped;
        lastPosition.current = positionClamped;
        setHandlePosition(positionClamped);
        onHandleRelease?.(calculateValue(positionClamped));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setHandlePosition, onHandleRelease]);

    const onMouseMove = useCallback(({ clientY }: MouseEvent) => {
        if (!handleRef.current) return;
        const currentPos = startPosition.current + moveY.current - clientY;
        const y = currentPos < 0
            ? 0
            : currentPos > maxPosition.current
                ? maxPosition.current
                : currentPos;

        setHandlePosition(y);
        lastPosition.current = y;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setHandlePosition]);

    const onMouseUp = useCallback(() => {
        if (!handleRef.current) return;
        startPosition.current = lastPosition.current;
        const value = calculateValue(lastPosition.current);
        onChange?.(value);
        onHandleRelease?.(value);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calculateValue, onHandleRelease, onChange]);

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        moveY.current = e.clientY;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Styled.SliderStyled>
            <Styled.SliderTrack
                ref={trackRef}
                onMouseDown={onTrackClick}
            />
            <Styled.SliderHandle
                data-testid='slider-handle'
                onMouseDown={onMouseDown}
                ref={handleRef}
            />
        </Styled.SliderStyled>
    );
};

export default Slider;
