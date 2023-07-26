import styled from 'styled-components';

interface LabelProps {
    hasValue: boolean;
}

interface ErrorProps {
    error?: boolean;
}

export const StyledInput = styled.input<ErrorProps>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.portfolio.text.primary};
  background: transparent;
  border: 1px solid ${({ theme, error }) =>
          error ? theme.portfolio.primaryColor
                  : theme.portfolio.text.secondary};
  border-bottom: 3px solid ${({ theme, error }) =>
          error ? theme.portfolio.primaryColor
                  : theme.portfolio.text.secondary};
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;


  &:focus {
    border-color: ${({ theme }) => theme.portfolio.text.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.portfolio.text.secondary};
    outline: none;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1rem;
  }
`;

export const StyledTextArea = styled.textarea<ErrorProps>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.portfolio.text.primary};
  background: transparent;
  border: 1px solid ${({ theme, error }) =>
          error ? theme.portfolio.primaryColor
                  : theme.portfolio.text.secondary};
  border-bottom: 3px solid ${({ theme, error }) =>
          error ? theme.portfolio.primaryColor
                  : theme.portfolio.text.secondary};
  padding: 14px 10px;
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  resize: none;
  border-radius: 0;

  &:focus {
    border-color: ${({ theme }) => theme.portfolio.text.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.portfolio.text.secondary};
    outline: none;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1rem;
  }
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${(props) => (props.hasValue ? '-28px' : '10px')};
  left: ${(props) => (props.hasValue ? '0' : '10px')};
  transition: all 0.2s ease-out;
  font-size: ${(props) => (props.hasValue ? '1rem' : '1.25rem')};
  color: ${({ theme }) => theme.portfolio.text.secondary};
  pointer-events: none;

  @media ${({ theme }) => theme.media.phone} {
    font-size: ${(props) => (props.hasValue ? '0.75rem' : '1rem')};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2px;
`;

export const Error = styled.span<ErrorProps>`
  display: ${(props) => (props.error ? 'block' : 'none')};
  color: ${({ theme }) => theme.portfolio.primaryColor};
  font-size: 16px;
  margin-top: 5px;
`;