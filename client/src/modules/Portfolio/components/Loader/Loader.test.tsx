import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

const setLocked = jest.fn();
jest.mock('../../../hooks/useLockedBody', () => ({
    __esModule: true,
    default: () => [true, setLocked]
}));

describe('Loader component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const props = {
            isOnScreen: true,
            loadingDuration: 0
        };

        render(withReduxAndStyledProviders(<Loader {...props} />));
    });

    it('should unlock body scroll when not on screen', () => {
        const props = {
            isOnScreen: false,
            loadingDuration: 1000
        };

        render(withReduxAndStyledProviders(<Loader {...props} />));
        expect(setLocked).toHaveBeenCalledWith(false);
    });
});
