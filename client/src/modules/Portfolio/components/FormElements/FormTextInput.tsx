import React, { useState, forwardRef } from 'react';
import * as Styled from './FormElements.styles';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

/**
 A React functional component that renders a text input field in a form.
 @typedef {object} InputProps
 @prop {string} [label] - The label to display above the input field.
 @prop {string} [value] - The current value of the input field.
 @prop {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange] - A function to be called when the input value changes.
 @prop {string} [error] - An error message to display below the input field, if applicable.
 @param {InputProps} props - The props object containing label, value, onChange, and error.
 @param {React.ForwardedRef<HTMLTextAreaElement>} ref - The ref to attach to the text input field.
 @return {JSX.Element} A React JSX element representing the text input field and associated label and error message.
 */
const FormTextInput: React.FC<InputProps> = forwardRef<HTMLTextAreaElement, InputProps>(({
                                                                                             label,
                                                                                             value,
                                                                                             onChange,
                                                                                             error,
                                                                                             ...rest
                                                                                         }, ref) => {
    const [hasValue, setHasValue] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHasValue(event.target.value !== '');
        onChange?.(event);
    };

    return (
        <Styled.InputContainer>
            <Styled.StyledTextArea ref={ref} value={value} onChange={handleInputChange} error={!!error} {...rest} />
            {label && (
                <Styled.Label htmlFor={rest.id || rest.name} hasValue={hasValue}>
                    {label}
                </Styled.Label>
            )}
            <Styled.Error error={!!error}>ⓘ {error}</Styled.Error>
        </Styled.InputContainer>
    );
});

export default FormTextInput;