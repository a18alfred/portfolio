import styled from 'styled-components';
import { slideTop } from '../../../../shared/theme/animaton';

export const Container = styled.div<{ delay: number }>`
          display: flex;
          align-content: center;
          justify-content: space-between;
          flex-direction: column;
          height: 90px;
          width: 90px;
          font-size: 12px;
          text-align: center;

          svg {
            width: 100%;
            height: auto;
          }

          p {
            margin-top: 1rem;
            justify-self: flex-end;
            color: ${({ theme }) => theme.portfolio.text.secondary};
          }

          @media ${({ theme }) => theme.media.phone} {
            height: clamp(4.0625rem, -1.4773rem + 22.7273vw, 5.625rem);
            width: clamp(4.0625rem, -1.4773rem + 22.7273vw, 5.625rem);
            font-size: clamp(0.625rem, 0.1818rem + 1.8182vw, 0.75rem);
          }

          animation: ${slideTop} 0.5s ease-out both;
          animation-delay: ${({ delay }) => delay}s;
    `
;
