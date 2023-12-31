import styled from 'styled-components';
import { Props } from './Loader';

export const Container = styled.section<Props>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 333;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOnScreen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.portfolio.bgColor};
  gap: ${({ theme }) => theme.space.lg};
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 5rem;

  animation: slide-out-blurred-top 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation-delay: ${({ loadingDuration }) => `${loadingDuration - 500}ms`};

  @keyframes slide-out-blurred-top {
    0% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 0;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px) scaleY(2) scaleX(0.2);
      transform-origin: 50% 0;
      filter: blur(40px);
      opacity: 0;
    }
  }
`;

export const TextContainer = styled.div`
  height: 50px;
  overflow: hidden;
`;

export const ScrollText = styled.p<{ loadingDuration: number }>`
  height: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.portfolio.primaryColor};

  transform: translateY(100%);
  animation: my-animation ${({ loadingDuration }) => `${loadingDuration - 300}ms`} linear;
  animation-delay: 300ms;

  @keyframes my-animation {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(-750%);
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1.5rem;

    @keyframes my-animation {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(-560%);
      }
    }
  }
`;
