import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 0 5%;
  gap: 2rem;
`;

export const Header = styled.div`
  margin-top: 64px;
  text-align: center;

  h1 {
    font-size: 64px;
    margin-bottom: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 120%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const IconImg = styled.img`
  image-rendering: pixelated;
  user-select: none;
  height: 64px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  @media (hover: hover) {
    :hover {
      scale: 1.2;
    }
  }
`;