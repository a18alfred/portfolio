import { keyframes } from 'styled-components';

/**
 * Keyframes for slide animation from left to right
 * @returns {keyframes} - Keyframes for sliding animation
 */
export const slideRight = keyframes`
  0% {
    transform: translateX(-300px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

/**
 * Keyframes for slide animation from top to bottom
 * @returns {keyframes} - Keyframes for sliding animation
 */
export const slideTop = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

/**
 * Keyframes for roll-in animation from the right
 * @returns {keyframes} - Keyframes for roll-in animation
 */
export const rollInRight = keyframes`
  0% {
    transform: translateX(400px) rotate(360deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
`;
