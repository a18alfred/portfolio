import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.3s ease-out;
}

@media ${({ theme }) => theme.media.phone} {
  bottom: 10%;
}

@media screen and (max-height: 420px) {
  display: none;
}
`;

export const Mouse = styled.div`
  width: 35px;
  height: 64px;
  border-radius: 32px;
  border: 4px solid ${({ theme }) => theme.portfolio.text.secondary};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 2px 2px 2px;
`;

const dotMoves = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(24px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const Dot = styled.div`
  width: 10px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.portfolio.text.secondary};
  margin-bottom: 1px;

  animation: ${dotMoves} 1.5s ease-in-out infinite;
`;

