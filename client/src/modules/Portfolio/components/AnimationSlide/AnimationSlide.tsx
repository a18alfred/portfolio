import React, { FC, useEffect, useRef, useState } from 'react';
import * as Styled from './AnimationSlide.styles';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export interface Props {
    children: React.ReactNode;
}

/**
 * AnimationSlide component that animates its children when they become visible on the screen.
 * @returns {JSX.Element} JSX.Element.
 */
const AnimationSlide: FC<Props> = ({ children }): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isElementVisible] = useIntersectionObserver(containerRef, {
        threshold: 0.1
    });
    const [isOnScreen, setIsOnScreen] = useState(false);
    useEffect(() => {
        if (isElementVisible && !isOnScreen) setIsOnScreen(true);
    }, [isElementVisible, isOnScreen]);

    if (!isOnScreen) return (
        <Styled.HiddenContainer
            ref={containerRef}
        >
            {children}
        </Styled.HiddenContainer>
    );

    return (
        <Styled.Container>
            {isOnScreen && children}
        </Styled.Container>
    );
};

export default AnimationSlide;