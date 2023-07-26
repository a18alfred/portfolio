import * as Styled from './AnimatedImage.styles';
import React, { useEffect, useState } from 'react';
import AnimationSlide from '../AnimationSlide/AnimationSlide';

export interface Props {
    src: string;
    alt: string;
    animationDuration: number;
    delay?: number;
}

/**
 * AnimatedImage component displays an image with animation using Framer Motion library.
 *
 * @component
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {number} animationDuration - animation duration
 * @param {number} delay - animation delay
 *
 * @returns {JSX.Element} The rendered AnimatedImage component.
 */
const AnimatedImage: React.FC<Props> = ({ src, alt, animationDuration, delay }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => setLoaded(true);
    }, [src, setLoaded]);

    if (!loaded)
        return (
            <img
                src={'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 3 4\'%3E%3C/svg%3E'}
                alt={alt}
            />
        );

    return (
        <AnimationSlide>
            <Styled.Img
                src={src}
                alt={alt}
                animationDuration={animationDuration}
                delay={delay}
            />
        </AnimationSlide>
    );
};

export default AnimatedImage;
