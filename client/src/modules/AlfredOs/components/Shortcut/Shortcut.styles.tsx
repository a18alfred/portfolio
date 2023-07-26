import styled, { css } from 'styled-components';

interface IconSelectionProps {
    isSelected: boolean;
    icon: string;
}

interface ShortcutTextWrapperProps {
    isSelected: boolean;
    lastSelected: boolean;
}

export const AppShortcutContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transform-origin: center;
  transform: scale(1.5);
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding-bottom: 3px;
  position: relative;
`;

export const IconSelection = styled.div<IconSelectionProps>`
  display: flex;
  position: absolute;
  top: 0;
  width: 32px;
  height: 32px;
  -webkit-mask: ${({ isSelected, icon }) => isSelected ? `url(${icon})` : 'none'};
  mask: ${({ isSelected, icon }) => isSelected ? `url(${icon})` : 'none'};
  background-image: ${({ isSelected, theme }) => isSelected ? theme.gradients.checkerBlue : 'none'};

  ${({ isSelected }) =>
          isSelected && css`
            background-size: 2px 2px;
            background-position: 0 0, 0 1px, 1px -1px, -1px 0px;
            pointer-events: none;
          `
  }
`;

export const ShortcutText = styled.p`
  cursor: pointer;
  color: white;
  font-size: 8px;
  padding-right: 2px;
  padding-left: 2px;
`;

export const ShortcutTextWrapper = styled.div<ShortcutTextWrapperProps>`
  display: flex;
  background-color: ${({ isSelected, theme }) => isSelected ? theme.osColors.blue : 'transparent'};
  ${({ isSelected, lastSelected }) =>
          isSelected ? css`background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23fff' stroke-width='2' stroke-dasharray='1%2c1' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`
                  : lastSelected ? css`background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23ea3323' stroke-width='2' stroke-dasharray='1%2c1' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`
                          : css``
  }
`;