import { css } from 'styled-components';

/**
 * gradient for text
 * @css gradientText
 */
export const gradientText = css`
  background-image: linear-gradient(to right top, #ee0979, #fd2561, #ff4349, #ff5f2e, #ff7b00);
  background-position: 100% 50%;
  background-size: 100% 100%;
  transition: background-position 0.4s ease-in-out;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

/**
 * portion of styles to set content max-width and center it
 * @css contentMaxWidthStyles
 */
export const contentMaxWidthStyles = css`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 4rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0.5rem 1rem;
  }
`;

/**
 * CSS for slide container
 * @css slideContainer
 */
export const slideContainer = css`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  height: max-content;
  overflow: hidden;
`;