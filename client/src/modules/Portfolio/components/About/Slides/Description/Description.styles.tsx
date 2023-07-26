import styled from 'styled-components';
import { slideContainer } from '../../../../../../shared/theme/reusableCss';

export const Container = styled.section`
  ${slideContainer};
  margin-top: 1rem;
  margin-bottom: 8rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  align-content: flex-start;
  width: 100%;
  grid-template-areas: 'col1 col2';
  margin-top: 3rem;
  overflow: hidden;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'col2' 'col1';
    margin-top: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  grid-area: col1;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  grid-area: col2;
  padding: 0 2rem 2rem 2rem;

  @media (max-width: 1080px) {
    padding: 2rem;
  }

  img {
    object-fit: contain;
    max-width: 350px;
    width: 100%;
    height: auto;

    @media (max-width: 1080px) {
      max-width: 300px;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;