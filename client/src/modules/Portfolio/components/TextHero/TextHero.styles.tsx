import styled from 'styled-components';
import { slideContainer } from '../../../../shared/theme/reusableCss';

export const Container = styled.section`
  ${slideContainer};
  position: relative;
  min-height: 100vh;
  text-align: center;
  margin-top: -71px;
  margin-bottom: 71px;


  @media ${({ theme }) => theme.media.tablet} {
    margin-top: -60px;
    margin-bottom: 60px;
  }
`;

export const Message = styled.div`
  padding: 0 10rem;
`;
