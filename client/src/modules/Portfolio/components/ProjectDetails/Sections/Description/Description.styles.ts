import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  grid-gap: 5rem;
  margin: 12rem 0 12rem 0;

  @media ${({ theme }) => theme.media.tablet} {
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    margin: 80px 0 5rem 0;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LinksWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: max-content;
`;

export const NameWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;

  @media ${({ theme }) => theme.media.tablet} {
    height: 35px;
    width: 35px;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    opacity: 0.2;
    margin-bottom: 1.5rem;
  }

  span:nth-last-child(1) {
    opacity: 0.2;
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
`;

export const Breaker = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.portfolio.text.primary};
  opacity: 0.2;
`;
