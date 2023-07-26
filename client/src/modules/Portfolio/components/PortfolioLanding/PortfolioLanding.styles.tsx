import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  height: max-content;
`;

export const Navigation = styled.nav`
  width: 30%;
  position: relative;

  @media ${({ theme }) => theme.media.phone} {
    width: 0;
  }
`;

export const LinkWrapper = styled.div`
  z-index: 2;
  position: absolute;
  min-height: 100vh;
  height: max-content;
  left: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    left: 2rem;
  }
`;

interface Props {
    photo: string;
}

export const Photo = styled.div<Props>`
  z-index: 1;
  width: 100%;

  background: ${({ photo }) => `linear-gradient(to top, #010606, transparent 120%),    url(${photo}) left/cover`};

  @keyframes fade-in {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: fade-in 0.7s ease-in-out both;
  animation-delay: 500ms;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    background: ${({ photo }) => `linear-gradient(to top, #010606, transparent 175%),    url(${photo}) left/cover`};
  }
`;
