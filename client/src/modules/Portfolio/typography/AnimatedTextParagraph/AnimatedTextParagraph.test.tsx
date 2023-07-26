import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../../shared/theme/variables';
import AnimatedTextParagraph from './AnimatedTextParagraph';

describe('AnimatedTextParagraph', () => {
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

    it('renders paragraph text', () => {
        const paragraphText = 'Lorem ipsum dolor sit amet';
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <AnimatedTextParagraph
                    margin='0'
                    withDarkColor={false}
                    size='large'
                    paragraphText={paragraphText}
                    animationDuration={0.1}
                />
            </ThemeProvider>
        );
        expect(getByText(paragraphText)).toBeInTheDocument();
    });

    it('renders children content', () => {
        const childrenContent = 'This is the children content';
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <AnimatedTextParagraph
                    margin='0'
                    withDarkColor={false}
                    size='large'
                    animationDuration={0.1}
                >
                    {childrenContent}</AnimatedTextParagraph>
            </ThemeProvider>
        );
        expect(getByText(childrenContent)).toBeInTheDocument();
    });
});