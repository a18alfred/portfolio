import React, { useState } from 'react';
import DosPlayer from '../../DosPlayer/DosPlayer';
import Window from '../../Window/Window';
import useInitialWindowSize from '../../../hooks/useInitialWindowSize';

export interface DoomAppProps extends WindowAppProps {
    initialWidth?: number,
    initialHeight?: number,
}

/**
 * Renders a window containing the DOS version of the classic game Doom.
 * @param {Object} props - The props object.
 * @param {number} [props.initialWidth=980] - The initial width of the window.
 * @param {number} [props.initialHeight=670] - The initial height of the window.
 * @param {string} props.appKey - The unique key for the app.
 * @returns {JSX.Element} - The rendered component.
 */
const DoomApp: React.FC<DoomAppProps> = ({ initialWidth = 980, initialHeight = 670, appKey }) => {
    const { initWidth, initHeight, initTop, initLeft } = useInitialWindowSize({
        margin: 0,
        maxWidth: initialWidth,
        maxHeight: initialHeight
    });
    const [width, setWidth] = useState(initWidth);
    const [height, setHeight] = useState(initHeight);

    return (
        <Window
            top={initTop}
            left={initLeft}
            width={width}
            height={height}
            windowTitle='Doom'
            windowBarColor='#1C1C1C'
            windowBarIcon='doomIcon'
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            appKey={appKey}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl='assets/games/doom.jsdos' appKey={appKey} />
        </Window>
    );
};

export default DoomApp;
