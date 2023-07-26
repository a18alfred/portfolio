import React from 'react';
import { render } from '@testing-library/react';
import DesktopWindows from './DesktopWindows';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';
import { RootState } from '../../../../shared/state';
import { mockReduxStore } from '../../../../test/mockReduxStore';

const appKey = 'computer';
const mockState: RootState = {
    ...mockReduxStore, window: {
        activeWindowAppKey: appKey,
        highestZIndex: 1,
        desktopWindows: {
            'computer': {
                key: appKey,
                zIndex: 1,
                minimized: false,
                name: 'computer',
                icon: 'computerBig'
            }
        }
    }
};

describe('DesktopWindows', () => {
    it('renders without crashing', () => {
        const { container } = render(withReduxAndStyledProviders(<DesktopWindows />, mockState));
        expect(container).toBeInTheDocument();
    });
});