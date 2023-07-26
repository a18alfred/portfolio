import React from 'react';
import { render, screen } from '@testing-library/react';
import WebampPlayer from './WebampPlayer';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';
import { mockReduxStore } from '../../../../../test/mockReduxStore';
import { RootState } from '../../../../../shared/state';

const appKey = 'webamp-player-app';
const mockState: RootState = {
    ...mockReduxStore, window: {
        activeWindowAppKey: appKey,
        highestZIndex: 1,
        desktopWindows: {
            'webamp-player-app': {
                key: appKey,
                zIndex: 1,
                minimized: false,
                name: 'Webamp-player',
                icon: 'winampIcon'
            }
        }
    }
};

jest.mock('webamp');

describe('WebampPlayer component', () => {
    beforeAll(() => {
        window.AudioContext = jest.fn().mockImplementation(() => ({
            createMediaElementSource: jest.fn().mockReturnValue({
                connect: jest.fn()
            })
        }));
    });

    afterAll(() => {
        if (window.AudioContext) {
            // Cast undefined to AudioContext constructor type
            (window as any).AudioContext = undefined;
        }
    });

    it('should render without error', () => {
        render(withReduxAndStyledProviders(<WebampPlayer appKey={appKey} />, mockState));
        const container = screen.getByTestId('player-container');
        expect(container).toBeInTheDocument();
    });
});