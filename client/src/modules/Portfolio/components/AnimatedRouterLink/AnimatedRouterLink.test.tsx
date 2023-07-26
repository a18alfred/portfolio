import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedRouterLink from './AnimatedRouterLink';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('AnimatedRouterLink component', () => {
    it('renders without crashing', () => {
        render(
            withReduxAndStyledProviders(
                <AnimatedRouterLink
                    variant='standard'
                    to='/path'
                    text='Link Text'
                    animationTimeout={500}
                />
            )
        );

        const linkElement = screen.getByText('Link Text');
        expect(linkElement).toBeInTheDocument();
    });

    it('displays correct variant', () => {
        render(
            withReduxAndStyledProviders(
                <AnimatedRouterLink
                    variant='highlight'
                    to='/path'
                    text='Link Text'
                    animationTimeout={500}
                />
            )
        );

        const linkElement = screen.getByText('Link Text');
        expect(linkElement).toHaveStyle('background-image: linear-gradient(to right top, #ee0979, #fd2561, #ff4349, #ff5f2e, #ff7b00);'); // Assuming 'highlight' adds a CSS class to the link element
    });

    it('displays correct destination', () => {
        render(
            withReduxAndStyledProviders(
                <AnimatedRouterLink
                    variant='standard'
                    to='/path'
                    text='Link Text'
                    animationTimeout={500}
                />
            )
        );

        const linkElement = screen.getByText('Link Text');
        expect(linkElement).toHaveAttribute('href', '/path');
    });
});
