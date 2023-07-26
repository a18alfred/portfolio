import styled, { css } from 'styled-components';

interface OuterBorderProps {
    isIcon: boolean;
}

export const OuterBorder = styled.div<OuterBorderProps>`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.black};
  border-top-color: ${props => props.theme.osColors.white};
  border-left-color: ${props => props.theme.osColors.white};
  background: ${props => props.theme.osColors.lightGray};
  cursor: pointer;

  ${({ isIcon }) => isIcon && css`
    width: 16px;
    height: 14px;
  `
  }
`;

interface InnerBorderProps extends OuterBorderProps {
    isIcon: boolean;
    isText: boolean;
}

export const InnerBorder = styled.div<InnerBorderProps>`
  display: flex;
  border: 1px solid ${props => props.theme.osColors.darkGray};
  border-top-color: ${props => props.theme.osColors.lightGray};
  border-left-color: ${props => props.theme.osColors.lightGray};
  flex: 1;

  ${({ isIcon }) => isIcon && css`
    width: 12px;
    height: 12px;
  `
  }
  ${({ isText }) => isText && css`
    padding: 4px;
  `
  }
  :hover {
    background-color: ${props => props.theme.osColors.darkGray};;
  }
`;