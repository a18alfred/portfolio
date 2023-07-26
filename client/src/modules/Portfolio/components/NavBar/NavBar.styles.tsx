import styled from 'styled-components';
import { contentMaxWidthStyles } from '../../../../shared/theme/reusableCss';

export const Container = styled.nav`
  z-index: ${({ theme }) => theme.portfolio.zIndex.navigation};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.portfolio.bgColor};

  @media screen and (max-height: 420px) {
    background: transparent;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  ${contentMaxWidthStyles};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;