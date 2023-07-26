import styled from 'styled-components';
import { contentMaxWidthStyles } from '../../../../shared/theme/reusableCss';

export const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 20rem;
  padding-bottom: 14rem;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 10rem;
    padding-bottom: 6rem;
  }
`;