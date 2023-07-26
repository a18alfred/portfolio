import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('FormInput component', () => {
    it('renders without crashing', () => {
        render(
            withReduxAndStyledProviders(
                <FormInput id={'name'} label='Name' value='' onChange={() => {
                }} />
            )
        );
        const inputElement = screen.getByLabelText('Name');
        expect(inputElement).toBeInTheDocument();
    });

    it('displays the label correctly', () => {
        const label = 'Email';
        render(
            withReduxAndStyledProviders(
                <FormInput id={'email'} label={label} value='' onChange={() => {
                }} />
            )
        );
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    it('displays the error message correctly', () => {
        const error = 'Invalid input';
        render(
            withReduxAndStyledProviders(
                <FormInput id={'name'} label='Name' value='' onChange={() => {
                }} error={error} />
            )
        );
        const errorElement = screen.getByText(`ⓘ ${error}`);
        expect(errorElement).toBeInTheDocument();
    });
});
