import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 780px;
  width: 100%;

  h1 {
    text-align: left;
  }

  margin: 14rem 0;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 0;
    margin-top: 4rem;
  }
`;