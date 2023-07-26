import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopBar from './Topbar';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('TopBar', () => {
    it('should render the component without error', () => {
        const containerRef = { current: null };
        const isDraggingResizing = { current: false };
        const appKey = 'myAppKey';
        const maximize = jest.fn();

        render(
            withReduxAndStyledProviders(
                <TopBar
                    containerRef={containerRef}
                    isDraggingResizing={isDraggingResizing}
                    appKey={appKey}
                    maximize={maximize}
                />
            )
        );
    });
});
