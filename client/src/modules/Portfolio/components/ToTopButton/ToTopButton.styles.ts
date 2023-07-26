import styled, { keyframes } from 'styled-components';

const annimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const Btn = styled.button`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.75rem;
  cursor: pointer;

  color: ${({ theme }) => theme.portfolio.text.secondary};

  animation: ${annimation} 1.5s ease-in-out infinite;
`;