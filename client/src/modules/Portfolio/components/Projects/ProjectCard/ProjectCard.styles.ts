import styled, { css } from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: auto;
  }
`;

export const Wrapper = styled.div<{ flipSides?: boolean }>`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas: 'DescColumn ImgColumn';
  grid-gap: 4rem;
  width: 100%;

  ${({ flipSides }) => flipSides && css`
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: 'ImgColumn DescColumn';
  `};

  @media ${({ theme }) => theme.media.tablet} {
    grid-gap: 2rem;
    grid-template-areas: unset;
    grid-template-columns: 1fr;
  }
`;

export const DescColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
  grid-area: DescColumn;

  @media ${({ theme }) => theme.media.tablet} {
    grid-area: unset;
  }
`;

export const ImgWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    padding: 4rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2rem 0;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 0.5rem;
  }
`;

export const ImgColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  grid-area: ImgColumn;

  @media ${({ theme }) => theme.media.tablet} {
    grid-area: unset;
    padding: 4rem;
    display: none;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2rem;
  }
`;

export const NameWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    font-size: 18px;
    font-weight: 700;
  }
`;
export const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

export const Stack = styled.span`
  font-weight: 700;
  margin-right: 0.25rem;
`;



