import styled from 'styled-components';
import { slideContainer } from '../../../../../../shared/theme/reusableCss';

export const Container = styled.section`
  ${slideContainer};
  min-height: 100vh;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 4rem;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const LeftColumn = styled.div`
  flex: 0.8;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
export const RightColumn = styled.ul`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;