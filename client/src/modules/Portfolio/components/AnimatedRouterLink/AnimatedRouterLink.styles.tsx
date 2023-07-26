import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Props } from './AnimatedRouterLink';
import { slideRight } from '../../../../shared/theme/animaton';
import { gradientText } from '../../../../shared/theme/reusableCss';

type LinkProps = Pick<Props, 'variant'> & {
    $animationTimeout: number
}

const standardStyles = css`
  color: #ffffff;
`;

export const CustomLink = styled(Link)<LinkProps>`
  ${({ variant }) =>
          variant === 'highlight' ? gradientText : standardStyles};
  display: flex;
  font-size: clamp(4rem, 2.9804rem + 4.183vw, 8rem);
  line-height: clamp(6.5rem, 5.2rem + 5.3333vw, 10rem);
  letter-spacing: -5px;
  font-weight: 700;
  white-space: nowrap;
  user-select: none;

  transition: all 0.3s ease-in-out;

  @media (hover: hover) {
    :hover {
      padding-left: 25px;
    }
  }

  animation: ${slideRight} 0.5s ease-out both;
  animation-delay: ${({ $animationTimeout }) => `${$animationTimeout}ms`};
`;
