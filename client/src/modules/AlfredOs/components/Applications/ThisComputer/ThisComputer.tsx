import React from 'react';
import Window from '../../Window/Window';
import useInitialWindowSize from '../../../hooks/useInitialWindowSize';
import WelcomePage from '../../WelcomePage/WelcomePage';
import { TITLE_FULL_NAME } from '../../../../../shared/config/global';

export interface ThisComputerProps extends WindowAppProps {
    initialWidth?: number;
    initialHeight?: number;
}

/**
 This component renders a "This Computer" application window
 @param {Object} props - The component props.
 @param {number} [props.initialWidth=1040] - The initial width of the window.
 @param {number} [props.initialHeight=760] - The initial height of the window.
 @param {string} props.appKey - The key of the application window.
 */
const ThisComputer: React.FC<ThisComputerProps> = ({ initialWidth = 1040, initialHeight = 760, appKey }) => {
    const { initWidth, initHeight, initTop, initLeft } = useInitialWindowSize({
        margin: 100,
        maxWidth: initialWidth,
        maxHeight: initialHeight
    });

    return (
        <Window
            top={initTop}
            left={initLeft}
            width={initWidth}
            height={initHeight}
            windowBarIcon='computerSmall'
            windowTitle='Мой компьютер'
            appKey={appKey}
            bottomLeftText={`© ${new Date().getFullYear()} ${TITLE_FULL_NAME}. Все права защищены.`}
        >
            <div className='site-page'>
                <WelcomePage />
            </div>
        </Window>
    );
};

export default ThisComputer;
