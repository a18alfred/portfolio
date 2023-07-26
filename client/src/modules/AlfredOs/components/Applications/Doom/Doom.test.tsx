import React from 'react';
import { render } from '@testing-library/react';
import Doom from './Doom';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

jest.mock('../../DosPlayer/DosPlayer', () => {
    return () => <div>DosPlayer component</div>;
});

jest.mock('../../Window/Window', () => {
    return () => <div>Window component</div>;
});

jest.mock('../../../../hooks/useInitialWindowSize', () => {
    return () => ({
        initWidth: 980,
        initHeight: 670,
        initTop: 0,
        initLeft: 0
    });
});

describe('DoomApp component', () => {
    it('should render without error', () => {
        const { container } = render(
            withReduxAndStyledProviders(<Doom appKey='doomApp' />)
        );
        expect(container).toBeInTheDocument();
    });
});