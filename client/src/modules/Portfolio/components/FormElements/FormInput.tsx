import React, { useState, forwardRef } from 'react';
import * as Styled from './FormElements.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

/**
 * A React functional component that renders an input field in a form.
 * @typedef {object} InputProps
 * @prop {string} [label] - The label to display above the input field.
 * @prop {string} [value] - The current value of the input field.
 * @prop {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - A function to be called when the input value changes.
 * @prop {string} [error] - An error message to display below the input field, if applicable.
 * @param {InputProps} props - The props object containing label, value, onChange, and error.
 * @param {React.ForwardedRef<HTMLInputElement>} ref - The ref to attach to the input field.
 * @return {JSX.Element} A React JSX element representing the input field and associated label and error message.
 */
const FormInput: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
                                                                                      label,
                                                                                      value,
                                                                                      onChange,
                                                                                      error,
                                                                                      ...rest
                                                                                  }, ref) => {
    const [hasValue, setHasValue] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(event.target.value !== '');
        onChange?.(event);
    };

    return (
        <Styled.InputContainer>
            <Styled.StyledInput ref={ref} value={value} onChange={handleInputChange} error={!!error} {...rest} />
            {label && (
                <Styled.Label htmlFor={rest.id || rest.name} hasValue={hasValue}>
                    {label}
                </Styled.Label>
            )}
            <Styled.Error error={!!error}>ⓘ {error}</Styled.Error>
        </Styled.InputContainer>
    );
});

export default FormInput;