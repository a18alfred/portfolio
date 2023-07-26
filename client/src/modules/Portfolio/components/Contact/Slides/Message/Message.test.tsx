import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';
import { withReduxAndStyledProviders } from '../../../../../../test/testUtils';

describe('Message component', () => {
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
        render(withReduxAndStyledProviders(<Message />));
    });

    it('displays the header and paragraph correctly', () => {
        render(withReduxAndStyledProviders(<Message />));

        const headerText = screen.getByText('Отправьте мне сообщение!');
        const paragraphText = screen.getByText(
            'У вас есть вопрос или предложение, или вы просто хотите поздороваться? Обращайтесь.'
        );

        expect(headerText).toBeInTheDocument();
        expect(paragraphText).toBeInTheDocument();
    });

    it('displays the contact form', () => {
        render(withReduxAndStyledProviders(<Message />));

        const contactForm = screen.getByTestId('contact-form');

        expect(contactForm).toBeInTheDocument();
    });
});
