import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ContactForm from './ContactForm';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('ContactForm component', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('renders without crashing', () => {
        render(withReduxAndStyledProviders(<ContactForm />));

        // Check if the form elements are rendered
        const nameInput = screen.getByLabelText('Имя');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Сообщение');
        const submitButton = screen.getByRole('button', { name: 'Отправить' });

        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(messageInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

});
