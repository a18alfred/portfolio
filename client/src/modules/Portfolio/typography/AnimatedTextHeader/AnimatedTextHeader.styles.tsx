import styled, { css } from 'styled-components';
import { Props } from './AnimatedTextHeader';
import { gradientText } from '../../../../shared/theme/reusableCss';
import { slideRight, slideTop } from '../../../../shared/theme/animaton';

export type HeaderProps = Pick<Props, 'margin' | 'size' | 'gradient' | 'animationDuration'>;

const extraSmallVariantStyles = css`
  font-size: 1.5rem;
`;
const smallVariantStyles = css`
  font-size: 2.5rem;

  @media ${({ theme }) => theme.media.phone} {
    font-size: 2rem;
  }
`;
const mediumVariantStyles = css`
  font-size: 4rem;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: clamp(2rem, 0.0916rem + 8.1425vw, 4rem);
  }
`;

const largeVariantStyles = (animationDuration: number) => css`
  animation: ${slideRight} ${animationDuration}s ease-out both;
  font-size: 5rem;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: clamp(2.5rem, 0.2941rem + 9.8039vw, 5rem);
  }
`;

const defaultAnimation = (animationDuration: number) => css`
  animation: ${slideTop} ${animationDuration}s ease-out both;
`;

export const H1 = styled.h1<HeaderProps>`
  font-size: 4rem;
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.portfolio.text.primary};
  line-height: 120%;
  transition: font-size 250ms ease;
  ${({ size }) => size === 'extraSmall' && extraSmallVariantStyles};
  ${({ size }) => size === 'small' && smallVariantStyles};
  ${({ size }) => size === 'medium' && mediumVariantStyles};
  ${({ size, animationDuration }) => size === 'large'
          ? largeVariantStyles(animationDuration)
          : defaultAnimation(animationDuration)
  };
  ${({ gradient }) => gradient && gradientText};
`;
