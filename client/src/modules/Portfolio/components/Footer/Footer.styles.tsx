import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.portfolio.text.secondary};
  font-size: 0.75rem;
  font-weight: 500;
`;