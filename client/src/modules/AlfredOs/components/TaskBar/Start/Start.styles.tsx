import styled, { css } from 'styled-components';
import { ActiveElement, activeTabInner, activeTabOuter } from '../TaskBar.styles';

export const VerticalStartContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 30px;
  background-image: ${(props) => props.theme.gradients.startGradientBlue};
`;

export const TaskBarText = styled.p`
  font-size: 14px;
  color: black;
  font-weight: 600;
`;

export const VerticalText = styled.p`
  font-family: Terminal, sans-serif;
  text-orientation: sideways;
  font-size: 18px;
  padding: 8px 4px 64px 4px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.osColors.white};
  transform: scale(-1);
  writing-mode: tb-rl; /* using camelCase because it's a string value */
`;

export const StartWindowContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StartWindow = styled.div`
  position: absolute;
  bottom: 28px;
  display: flex;
  flex: 1;
  width: 256px;
  left: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.osColors.white};
  border-bottom-color: ${(props) => props.theme.osColors.black};
  border-right-color: ${(props) => props.theme.osColors.black};
  background: ${(props) => props.theme.osColors.lightGray};
`;

export const TaskBarTabsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 4px;
`;

export const ActiveTabOuter = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.osColors.black};
  border-bottom-color: ${(props) => props.theme.osColors.white};
  border-right-color: ${(props) => props.theme.osColors.white};
`;

export const StartWindowInner = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.osColors.lightGray};
  border-bottom-color: ${(props) => props.theme.osColors.darkGray};
  border-right-color: ${(props) => props.theme.osColors.darkGray};
  flex: 1;
`;

export const StartMenuText = styled.p`
  font-size: 14px;
  margin-left: 8px;
`;

export const StartContainerOuter = styled.div<ActiveElement>`
  display: flex;
  margin-left: 3px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.osColors.white};
  border-bottom-color: ${(props) => props.theme.osColors.black};
  border-right-color: ${(props) => props.theme.osColors.black};

  ${({ isActive }) => isActive && activeTabOuter}
`;

export const StartMenuOption = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 24px;
  padding: 12px;
  cursor: pointer;

  ${({ isActive }) => isActive
          ? css`
            :hover {
              background-color: #0000aa;
              color: white;
            }
          `
          : css`
            p {
              color: ${(props) => props.theme.osColors.darkGray};
              text-shadow: 1px 1px ${(props) => props.theme.osColors.white};
            }
          `
  }
`;

export const StartMenuSpace = styled.div`
  display: flex;
  flex: 1;
`;

export const StartMenuLine = styled.div`
  display: flex;
  height: 1px;
  background: ${(props) => props.theme.osColors.white};
  border-top: 1px solid ${(props) => props.theme.osColors.darkGray};
`;

export const StartContainer = styled.div<ActiveElement>`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  border: 1px solid ${(props) => props.theme.osColors.lightGray};
  border-bottom-color: ${(props) => props.theme.osColors.darkGray};
  border-right-color: ${(props) => props.theme.osColors.darkGray};
  padding: 1px 5px;

  ${({ isActive }) => isActive && activeTabInner};
`;

