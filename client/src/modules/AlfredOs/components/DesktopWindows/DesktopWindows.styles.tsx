import styled from 'styled-components';

interface WindowContainerProps {
    zIndex: number;
    minimized: boolean;
}

export const WindowContainer = styled.div<WindowContainerProps>`
  display: flex;
  position: relative;
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ minimized }) =>
          minimized &&
          `
      pointer-events: none;
      opacity: 0;
    `}
`;