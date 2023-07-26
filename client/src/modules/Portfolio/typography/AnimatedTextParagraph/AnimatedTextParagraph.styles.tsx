import styled, { css } from 'styled-components';
import { slideTop } from '../../../../shared/theme/animaton';

interface ParagraphProps {
    margin: string;
    $withDarkColor: boolean;
    size: 'large' | 'medium' | 'small';
    animationDuration: number;
    delay?: number;
}

const smallVariantStyles = css`
  font-size: 0.75rem;
`;
const mediumVariantStyles = css`
  font-size: 1rem;
`;
const largeVariantStyles = css`
  font-size: 1.25rem;
`;

export const P = styled.p<ParagraphProps>`
  z-index: 5;
  color: ${({ theme, $withDarkColor }) =>
          $withDarkColor ? theme.portfolio.text.secondary : theme.portfolio.text.primary};
  font-size: ${({ theme }) => theme.portfolio.fontSize.small};
  margin: ${({ margin }) => margin};
  line-height: 1.5;

  ${({ size }) => size === 'small' && smallVariantStyles};
  ${({ size }) => size === 'medium' && mediumVariantStyles};
  ${({ size }) => size === 'large' && largeVariantStyles};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1rem;
  }

  animation: ${slideTop} ${({ animationDuration }) => animationDuration}s ease-out both;
  animation-delay: ${({ delay }) => delay ? delay : 0}s;
`;
