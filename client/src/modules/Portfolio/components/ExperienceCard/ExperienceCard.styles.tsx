import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
  color: ${({ theme }) => theme.portfolio.text.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1170px) {
    margin-bottom: 0.5rem;
  }

  font-size: 14px;

  @media ${({ theme }) => theme.media.phone} {
    font-size: clamp(0.75rem, 0.375rem + 1.6vw, 0.875rem);
  }
`;

export const ExperienceHeaders = styled.div`
  h3 {
    color: ${({ theme }) => theme.portfolio.text.primary};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;

    @media ${({ theme }) => theme.media.phone} {
      font-size: clamp(0.875rem, 0.125rem + 3.2vw, 1.125rem);
    }
  }

  p {
    font-weight: 700;
    margin: 0;
    font-size: inherit;
  }
`;

export const ExperienceList = styled.ul`
  list-style: disc;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  li {
    padding-left: 5px;
    list-style: disc;
  }
`;


export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: inherit;
    margin: 0;
  }
`;


export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;

  & > img {
    width: 50%;
    height: auto;
    object-fit: contain;
  }
`;