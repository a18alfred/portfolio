import styled from 'styled-components';
import { slideContainer } from '../../../../../../shared/theme/reusableCss';

export const Container = styled.section`
  ${slideContainer};
`;

export const ExperienceWrapper = styled.div`
  @media (max-width: 1170px) {
    padding-left: 0.5rem;
  }
`;