import React, { useEffect, useRef } from 'react';
import Webamp from 'webamp';
import { useAppSelector } from '../../../../../shared/state/hooks';
import { selectWindowByKey } from '../../../../../shared/state/window/slice';
import useDesktopWindow from '../../../hooks/useDesktopWindow';
import { initialTracks } from '../../../config/osPlayerTracks';

export interface WebampProps extends WindowAppProps {
}

/**
 This component is responsible for rendering the Webamp audio player as a desktop window.
 @param {WebampProps} props - The props object.
 @param {string} props.appKey - The key for the app.
 @returns {JSX.Element} - A JSX element representing the Webamp audio player window.
 */
const WebampPlayer: React.FC<WebampProps> = (props) => {
    const window = useAppSelector(state => selectWindowByKey(state, props.appKey));
    const winampRef = useRef<HTMLElement | null>(null);
    const { windowMinimize, windowInteract, close } = useDesktopWindow();

    const onClick = () => {
        windowInteract(props.appKey);
    };

    useEffect(() => {
        const player = new Webamp({
            zIndex: window.zIndex,
            initialTracks
        });

        const container = document.getElementById('player-container') as HTMLElement;

        player.onClose(() => close(props.appKey));
        player.onMinimize(() => windowMinimize(props.appKey));

        const renderPromise = player.renderWhenReady(container);
        if (renderPromise && typeof renderPromise.then === 'function') {
            renderPromise.then(() => {
                winampRef.current = document.getElementById('webamp') as HTMLElement;
                winampRef.current?.addEventListener('mousedown', onClick);
            });
        }

        return () => {
            player.dispose();
            winampRef.current?.removeEventListener('mousedown', onClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (winampRef.current) {
            if (window.minimized) {
                winampRef.current.style.opacity = '0';
                winampRef.current.style.pointerEvents = 'none';
            } else {
                winampRef.current.style.opacity = '1';
                winampRef.current.style.zIndex = window.zIndex.toString();
                winampRef.current.style.pointerEvents = 'auto';
            }
        }
    }, [window]);


    return (
        <div id='player-container'
             data-testid='player-container'
             style={{
                 position: 'fixed',
                 height: '100vh',
                 width: '100vw',
                 pointerEvents: 'none'
             }}
        />
    );
};

export default WebampPlayer;




