import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Window from './Window';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Window', () => {
    it('should render the component without error', () => {
        const { getByText } = render(
            withReduxAndStyledProviders(
                <Window
                    appKey='appKey'
                    width={800}
                    height={600}
                    top={0}
                    left={0}
                >
                    Window Content
                </Window>
            ));
        expect(getByText('Window Content')).toBeInTheDocument();
    });

    it('should call the onWidthChange and onHeightChange callbacks when the window size changes', () => {
        const onWidthChange = jest.fn();
        const onHeightChange = jest.fn();
        const { getByText } = render(
            withReduxAndStyledProviders(
                <Window
                    appKey='appKey'
                    width={800}
                    height={600}
                    top={0}
                    left={0}
                    onWidthChange={onWidthChange}
                    onHeightChange={onHeightChange}
                >
                    Window Content
                </Window>)
        );

        fireEvent.mouseDown(getByText('Window Content')); // Simulate resizing the window
        fireEvent.mouseUp(getByText('Window Content')); // Stop resizing

        expect(onWidthChange).toHaveBeenCalled();
        expect(onHeightChange).toHaveBeenCalled();
    });

    it('should maximize the window when double-clicking on the top bar', () => {
        const { getByTestId } = render(
            withReduxAndStyledProviders(
                <Window
                    appKey='appKey'
                    width={800}
                    height={600}
                    top={0}
                    left={0}
                    windowTitle='Window Title'
                >
                    Window Content
                </Window>
            ));

        const windowHitBox = getByTestId('window-hit-box');
        fireEvent.doubleClick(windowHitBox);

        const windowContainer = getByTestId('window-container');
        expect(windowContainer.style.width).toBe(`${window.innerWidth}px`);
        expect(windowContainer.style.height).toBe(`${window.innerHeight - 32}px`);
        expect(windowContainer.style.top).toBe('0px');
        expect(windowContainer.style.left).toBe('0px');
    });
});
