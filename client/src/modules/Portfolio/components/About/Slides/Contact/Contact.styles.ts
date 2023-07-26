import styled from 'styled-components';
import { slideContainer } from '../../../../../../shared/theme/reusableCss';
import { slideTop } from '../../../../../../shared/theme/animaton';

export const Container = styled.section`
  ${slideContainer};
  min-height: 100vh;
  position: relative;

  h1 {
    letter-spacing: -2px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.phone} {
    gap: 0;
  }
`;

export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  padding: 14px 45px;
  border-radius: ${({ theme }) => theme.portfolio.borderRadius};
  background-image: linear-gradient(-45deg,
  #ff7b00,
  #ee0979,
  #60a5fa,
  #4ade80);
  background-position: 100% 50%;
  background-size: 400% 400%;
  transition: background-position 0.3s ease-out, font-size 0.3s ease-out;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;

  @media (hover: hover) {
    :hover {
      background-position: 0 50%;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 18px;
  }

  animation: ${slideTop} 0.5s ease-out both;
`;