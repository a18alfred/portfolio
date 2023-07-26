import styled from 'styled-components';

export const WindowContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.osColors.lightGray};
  position: absolute;
`;

export const DragHitbox = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 70px);
  height: 48px;
  z-index: 10000;
  top: -8px;
  left: -4px;
  cursor: move;
`;

export const WindowBorderOuter = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.black};
  border-top-color: ${props => props.theme.osColors.lightGray};
  border-left-color: ${props => props.theme.osColors.lightGray};
  flex: 1;
`;

export const WindowBorderInner = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.darkGray};
  border-top-color: ${props => props.theme.osColors.white};
  border-left-color: ${props => props.theme.osColors.white};
  flex: 1;
  padding: 2px;
  flex-direction: column;
`;

export const ResizeHitbox = styled.div`
  display: flex;
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: -20px;
  right: -20px;
  cursor: nwse-resize;
`;

export const ContentOuter = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.white};
  border-top-color: ${props => props.theme.osColors.darkGray};
  border-left-color: ${props => props.theme.osColors.darkGray};
  flex-grow: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const ContentInner = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.lightGray};
  border-top-color: ${props => props.theme.osColors.black};
  border-left-color: ${props => props.theme.osColors.black};
  flex: 1;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  overflow-x: hidden;
  background-color: ${props => props.theme.osColors.white};
  z-index: 0;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-shrink: 1;
  width: 100%;
  height: 20px;
`;


export const InsetBorder = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.white};
  border-top-color: ${props => props.theme.osColors.darkGray};
  border-left-color: ${props => props.theme.osColors.darkGray};
  padding: 2px;
  overflow: hidden;
`;

export const BottomLeftText = styled.p`
  font-size: 12px;
  margin-left: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  pointer-events: none;
  mix-blend-mode: difference
`;