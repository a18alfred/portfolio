import React from 'react';
import Window from '../../Window/Window';
import useInitialWindowSize from '../../../hooks/useInitialWindowSize';

export interface GithubProps extends WindowAppProps {
}

/**
 * The Visual Studio Code component that renders a window containing an iframe with the given Github repository URL.
 * @param {Object} props - The component props.
 * @param {string} props.appKey - The unique key of the application window.
 * @returns {JSX.Element} - The React component.
 */
const VsCode: React.FC<GithubProps> = (props) => {
    const { initWidth, initHeight, initTop, initLeft } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={initTop}
            left={initLeft}
            width={initWidth}
            height={initHeight}
            windowBarIcon='vsCodeIcon'
            windowTitle='Visual Studio Code'
            appKey={props.appKey}
            bottomLeftText={'Интегрированная среда разработки'}
        >
            <div className='site-page'>
                <iframe
                    id={`frame-${props.appKey}`}
                    src='https://github1s.com/a18alfred/portfolio'
                    title='Visual Studio Code'
                    width='100%'
                    height='100%'
                />
            </div>
        </Window>
    );
};

export default VsCode;
