import React, { useEffect, useState } from 'react';
import * as Styled from './ScrollHint.styles';

/**
 *Renders scroll hit component to indicate user to scroll in down direction
 *@function ScrollHint
 *@returns {JSX.Element}
 */
const ScrollHint = (): JSX.Element => {
    const [showHint, setShowHint] = useState(window.scrollY <= 0);

    useEffect(() => {
        const handleScroll = () => {
            const shouldShowHint = window.scrollY <= 0; // Check if the page is at the top
            setShowHint(shouldShowHint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Styled.Container
            data-testid='scroll-hint'
            style={{ opacity: showHint ? 1 : 0, transition: 'opacity 1s' }}
        >
            <Styled.Mouse>
                <Styled.Dot />
            </Styled.Mouse>
        </Styled.Container>
    );
};

export default ScrollHint;
