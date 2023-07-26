import React, { useEffect } from 'react';

import Portfolio from './modules/Portfolio';
import AlfredOs from './modules/AlfredOs';

import { useMediaQuery } from '@react-hook/media-query';
import { isMobile } from 'mobile-device-detect';
import useDesktopWindow from './modules/AlfredOs/hooks/useDesktopWindow';
import { MIN_OS_WIDTH_QUERY } from './shared/config/global';

/**
 *Renders main home page
 *@function App
 *@returns {JSX.Element}
 */
const App: React.FC = () => {
    const { open } = useDesktopWindow();
    const smallScreen = useMediaQuery(MIN_OS_WIDTH_QUERY);

    useEffect(() => {
        open('computer');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isMobile || smallScreen
                ? <Portfolio />
                : <AlfredOs />
            }
        </>
    );
};

export default App;
