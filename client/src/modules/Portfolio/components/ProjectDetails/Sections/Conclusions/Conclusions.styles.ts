import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 14rem;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 4rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 780px;
  margin-bottom: 14rem;
  width: 100%;

  h1 {
    text-align: left;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 6rem;
  }

  button {
    margin-top: 1.5rem;
  }
`;