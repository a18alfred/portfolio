import styled from 'styled-components';
import { slideTop } from '../../../../shared/theme/animaton';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  width: 100%;

  animation: ${slideTop} 0.5s ease-out both;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 3rem;
    flex-direction: column;
  }
`;
