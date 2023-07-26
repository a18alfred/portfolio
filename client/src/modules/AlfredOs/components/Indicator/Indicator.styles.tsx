import styled, { css } from 'styled-components';

type DraggableProps = {
    borderWidth: number;
}

const checkerBg = css`
  background-image: ${({ theme }) => theme.gradients.checkerBlack};
  background-size: 4px 4px;
  background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
  pointer-events: none;
`;

export const Draggable = styled.div`
  display: flex;
  opacity: 0;
  position: absolute;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 420px;
  min-width: 520px;
  z-index: -10000;
`;

export const HozDrag = styled.div<DraggableProps>`
  display: flex;
  width: 100%;
  height: ${({ borderWidth }) => borderWidth}px;
  background-color: ${props => props.theme.osColors.white};

  ${checkerBg};
`;

export const VertDragContainer = styled.div<DraggableProps>`
  display: flex;
  width: 100%;
  height: ${(props) => `calc(100% - ${props.borderWidth * 2}px)`};
  flex: 1;
  justify-content: space-between;
  pointer-events: none;
`;

export const VertDrag = styled.div<DraggableProps>`
  display: flex;
  width: ${({ borderWidth }) => borderWidth}px;
  height: 100%;
  background-color: ${props => props.theme.osColors.white};
  pointer-events: none;

  ${checkerBg};
`;
