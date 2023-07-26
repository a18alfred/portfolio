import styled, { css } from 'styled-components';

const rainbowWrapper = css`
  background: linear-gradient(124deg,
  #ff2400,
  #e81d1d,
  #e8b71d,
  #e3e81d,
  #1de840,
  #1ddde8,
  #2b1de8,
  #dd00f3,
  #dd00f3);
  background-size: 1800% 1800%;
  animation: rainbow 18s ease infinite;

  @keyframes rainbow {
    0% {
      background-position: 0 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0 82%;
    }
  }
`;

interface TopBarProps {
    isRainbow?: boolean;
    isActive: boolean;
    bgColor?: string;
}

export const TopBar = styled.div<TopBarProps>`
  display: flex;
  width: 100%;
  height: 20px;
  min-height: 20px;
  align-items: center;
  padding-right: 2px;
  box-sizing: border-box;

  ${({ isRainbow }) => isRainbow && rainbowWrapper};

  background-color: ${({ isActive, bgColor, theme }) => isActive ?
          bgColor ? bgColor : theme.osColors.blue
          : theme.osColors.darkGray};
`;

export const WindowTopButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const WindowHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

export const WindowHeaderText = styled.p<{ isActive: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ isActive, theme }) => isActive ? 'white' : theme.osColors.lightGray};
  white-space: nowrap;
  text-overflow: ellipsis;
`;