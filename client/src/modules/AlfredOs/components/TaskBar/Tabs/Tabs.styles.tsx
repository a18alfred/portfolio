import styled from 'styled-components';
import { ActiveElement, activeTabInner, activeTabOuter } from '../TaskBar.styles';

export const TaskBarTabsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 4px;
`;

export const TabContainerOuter = styled.div<ActiveElement>`
  display: flex;
  flex: 1;
  max-width: 300px;
  margin-right: 4px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.osColors.white};
  border-bottom-color: ${(props) => props.theme.osColors.black};
  border-right-color: ${(props) => props.theme.osColors.black};

  ${({ isActive }) => isActive && activeTabOuter}
`;

export const TabContainer = styled.div<ActiveElement>`
  display: flex;
  border: 1px solid ${(props) => props.theme.osColors.lightGray};
  border-bottom-color: ${(props) => props.theme.osColors.darkGray};
  border-right-color: ${(props) => props.theme.osColors.darkGray};
  align-items: center;
  padding-left: 4px;
  flex: 1;
  overflow: hidden;

  ${({ isActive }) => isActive && activeTabInner};

  p {
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

