import styled from 'styled-components';

export const Shutdown = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.osColors.black};
  padding: 64px;

  .blinking-cursor {
    background-color: #fff;
    width: 0.8em;
    height: 0.15em;
    animation: 0.65s blink step-end infinite;

    @keyframes blink {
      from,
      to {
        background-color: transparent;
      }
      50% {
        background-color: white;
      }
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.osColors.white};
  line-height: 1.5rem;
  white-space: pre-line;
`;

export const Img = styled.img`
  width: 1000px;
  height: 700px;
`;