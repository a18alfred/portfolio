import styled from 'styled-components';
import { slideContainer } from '../../../../../../shared/theme/reusableCss';

export const Container = styled.section`
  ${slideContainer};
  margin-bottom: 4rem;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.2rem;
  row-gap: 3rem;
  margin-bottom: 4rem;
`;

export const NameDivider = styled.span`
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.text.secondary};
  opacity: 0.2;
  width: 100vw;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
