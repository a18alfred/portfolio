import styled from 'styled-components';
import { rollInRight } from '../../../../shared/theme/animaton';
import { Props } from './SocialMediaContact';

type SocialIconProps = Pick<Props, 'size'>;

export const Container = styled.a<SocialIconProps>`
  .contact-icon {
    font-size: ${({ size }) => size === 'standard' ? '2.5rem' : '3rem'};
    color: ${({ theme }) => theme.portfolio.text.primary};
    animation: ${rollInRight} 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
    transition: all 0.3s ease;

    :hover {
      transition: all 0.3s ease;
      scale: 1.2;
      color: ${({ theme }) => theme.portfolio.primaryColor};
    }

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 2.5rem;
    }
  }
`;
