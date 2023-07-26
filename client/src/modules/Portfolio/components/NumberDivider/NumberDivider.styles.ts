import styled, { keyframes } from 'styled-components';

const expandAnimation = keyframes`
  0% {
    width: 0;
    scale: 0 1;
    opacity: 0;
  }
  100% {
    width: 90px;
    scale: 1 1;
    opacity: 1;
  }
`;

const appearanceAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 90px;
  height: 2px;

  animation: ${expandAnimation} 0.7s ease-out both;
`;

export const Line = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1px;
  background-color: ${({ theme }) => theme.portfolio.primaryColor};
  transform-origin: left center;
`;

export const Notch = styled.div`
  background-color: ${({ theme }) => theme.portfolio.primaryColor};
  position: absolute;
  opacity: 1;
  clip-path: polygon(0 -1px, 100% -1px, calc(100% - 10px) 100%, 10px 100%);
  width: 64px;
  height: 8px;
  top: 2px;
`;

export const Number = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.portfolio.primaryColor};

  animation: ${appearanceAnimation} 0.7s ease-out both;
`;