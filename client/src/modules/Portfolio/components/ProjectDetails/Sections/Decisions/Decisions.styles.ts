import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  grid-gap: 4rem;
  margin-bottom: 14rem;

  @media ${({ theme }) => theme.media.tablet} {
    grid-gap: 4rem;
    grid-template-columns: 1fr;
    margin: 4rem 0;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-right: 2rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 1.5rem;
  }
`;