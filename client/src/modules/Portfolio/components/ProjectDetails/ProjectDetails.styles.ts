import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 171px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 160px;
  }
`;
