import styled, { css } from 'styled-components';

export interface ActiveElement {
    isActive: boolean;
}

export const activeTabOuter = css`
  border: 1px solid ${(props) => props.theme.osColors.black};
  border-bottom-color: ${(props) => props.theme.osColors.white};
  border-right-color: ${(props) => props.theme.osColors.white};
`;
export const activeTabInner = css`
  border: 1px solid ${(props) => props.theme.osColors.darkGray};
  border-bottom-color: ${(props) => props.theme.osColors.lightGray};
  border-right-color: ${(props) => props.theme.osColors.lightGray};
  background-image: linear-gradient(45deg, white 25%, transparent 25%),
  linear-gradient(-45deg, white 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, white 75%),
  linear-gradient(-45deg, transparent 75%, white 75%);
  background-size: 4px 4px;
  background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
  pointer-events: none;
`;

export const TaskBarOuter = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 32px;
  background: ${(props) => props.theme.osColors.lightGray};
  border-top: 1px solid ${(props) => props.theme.osColors.lightGray};
  z-index: 100000;
`;

export const TaskBarInner = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.osColors.white};
  align-items: center;
  flex: 1;
`;

export const TaskBarInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;


export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.osColors.white};
  border-top-color: ${(props) => props.theme.osColors.darkGray};
  border-left-color: ${(props) => props.theme.osColors.darkGray};
  box-sizing: border-box;
  flex-shrink: 1;
  height: 24px;
  justify-content: space-between;
  margin-right: 4px;
  padding: 0 20px 0 4px;
  width: 86px;

  p {
    font-size: 12px;
    padding-top: 2px;
  }
`;