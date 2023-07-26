import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-size: 2.5rem;
  letter-spacing: -1px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  user-select: none;

  .main-letter {
    color: ${({ theme }) => theme.portfolio.primaryColor};
    position: relative;
  }

  .letter {
    visibility: visible;
    opacity: 1;
    animation-delay: 1500ms;
    animation: tracking-in-expand 0.7s ease-out both;

    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -1em;
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 2rem;
  }
`;

export const CustomLink = styled(Link)`
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
