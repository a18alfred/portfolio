import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormTextInput from './FormTextInput';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('FormTextInput component', () => {
    it('renders without crashing', () => {
        render(
            withReduxAndStyledProviders(
                <FormTextInput label='Username' value='' onChange={() => {
                }} />
            )
        );
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('displays the label correctly', () => {
        const label = 'Username';
        render(
            withReduxAndStyledProviders(
                <FormTextInput label={label} value='' onChange={() => {
                }} />
            )
        );
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    it('handles input change correctly', () => {
        const handleChange = jest.fn();
        render(
            withReduxAndStyledProviders(
                <FormTextInput label='Username' value='' onChange={handleChange} />
            )
        );
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'john.doe' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('displays the error message correctly', () => {
        const errorMessage = 'Invalid username';
        render(
            withReduxAndStyledProviders(
                <FormTextInput
                    label='Username'
                    value=''
                    onChange={() => {
                    }}
                    error={errorMessage}
                />
            )
        );
        const errorElement = screen.getByText(`ⓘ ${errorMessage}`);
        expect(errorElement).toBeInTheDocument();
    });
});
