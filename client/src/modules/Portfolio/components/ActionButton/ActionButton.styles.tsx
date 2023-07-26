import styled, { css, keyframes } from 'styled-components';
import { slideTop } from '../../../../shared/theme/animaton';

interface Props {
    isLoading?: boolean;
}

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const loadingButton = css`
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: ${({ theme }) => theme.portfolio.primaryColor} repeating-linear-gradient(60deg,
    transparent,
    transparent 10px,
    #000000 10px,
    #000000 20px);
    opacity: 0.3;
    animation: ${loadingKeyframes} 1s infinite linear;
  }

  & > span {
    opacity: 0.5;
  }

  cursor: wait;
`;

const hoveredButton = css`
  color: ${({ theme }) => theme.portfolio.text.primary};
  //  show icon
  span {
    visibility: visible;

    .action-icon {
      transform: translateX(8px);
    }
  }

  :before {
    opacity: 0;
  }

  :after {
    opacity: 1;
    transform-origin: 100px 100px;
    transform: scale(1) translate(-50px, -70px);
  }
`;

const disabledButton = css`
  background-image: ${({ theme }) => theme.gradients.mainRedGradient};
  color: ${({ theme }) => theme.portfolio.text.primary};
  cursor: not-allowed;
`;

export const Btn = styled.button<Props>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.5s, transform 0.3s, background-color 0.3s;
  outline: none;
  border-radius: ${({ theme }) => theme.portfolio.borderRadius};
  padding: 1rem 3.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.portfolio.text.primary};
  border: none;
  overflow: hidden;
  box-shadow: none;
  width: max-content;

  &:active {
    transform: translateX(5px);
  }

  &::after,
  &::before {
    border-radius: 4px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.portfolio.primaryColor};
    transition: opacity 0.3s, border 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 200px;
    background-image: linear-gradient(45deg,
    #01bf71 0%,
    #2bd2ff 52%,
    #2bff88 90%);
    border-color: transparent;
    border-radius: 50%;
    transform: translate(-10px, -70px) scale(0.1);
    opacity: 0;
    z-index: -1;

    transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
  }

  // Wrapped Icon
  span {
    position: absolute;
    right: 10%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.25rem;
    visibility: hidden;

    .action-icon {
      font-size: 20px;
      transition: transform 0.3s;
    }
  }

  @media (hover: hover) {
    &:hover {
      ${(props) => !props.disabled && !props.isLoading && hoveredButton};
    }
  }

  ${(props) => props.isLoading && loadingButton};

  &:disabled {
    ${disabledButton};
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`;

export const BtnWrapper = styled.div<{ animationDuration: number }>`
  animation: ${slideTop} ${({ animationDuration }) => animationDuration}s ease-out both;
`;
