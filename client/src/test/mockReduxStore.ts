import { RootState } from '../shared/state';
import { EmailStatus } from '../shared/state/system/types';

export const mockReduxStore: RootState = {
    system: {
        toShowIntro: true,
        isIFrame: false,
        isShutdown: false,
        shutdownCount: 0,
        volume: 0.5,
        emailStatus: EmailStatus.PREPARING
    },
    window: {
        desktopWindows: {},
        highestZIndex: 0,
        activeWindowAppKey: null
    }
};
