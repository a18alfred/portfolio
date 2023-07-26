import React, { useEffect } from 'react';
import * as Styled from './TopBar.styles';
import Icon from '../../General/Icon/Icon';
import Button from '../../Button/Button';
import { isNode, startFramePointerEvents, stopFramePointerEvents } from '../../../../../shared/utils/general';
import useDesktopWindow from '../../../hooks/useDesktopWindow';
import { IconName } from '../../../config/osIcons';
import { useAppSelector } from '../../../../../shared/state/hooks';
import { selectActiveWindow } from '../../../../../shared/state/window/slice';

export interface TopBarProps {
    containerRef: React.RefObject<HTMLDivElement>;
    isDraggingResizing: React.RefObject<boolean>;
    appKey: string;
    windowTitle?: string;
    rainbow?: boolean;
    windowBarColor?: string;
    windowBarIcon?: IconName;
    maximize: () => void;
}

/**
 Renders the top bar of a window in the AlfredOs desktop environment.
 @param {React.RefObject<HTMLDivElement>} containerRef - Reference to the window's container DOM element
 @param {React.RefObject<boolean>} isDraggingResizing - Reference to a boolean indicating if the window is being dragged or resized
 @param {string} appKey - Unique key of the application owning the window
 @param {string} [windowTitle] - Title of the window
 @param {boolean} [rainbow] - Boolean indicating if the top bar should be styled with a rainbow effect
 @param {string} [windowBarColor] - CSS color of the top bar
 @param {string} [windowBarIcon] - Name of the icon to display on the left side of the top bar
 @param {function} maximize - Callback function to maximize the window
 @returns {JSX.Element} JSX element representing the top bar of a window
 */
const TopBar: React.FC<TopBarProps> = ({
                                           containerRef,
                                           isDraggingResizing,
                                           appKey,
                                           rainbow,
                                           windowBarColor,
                                           windowBarIcon,
                                           windowTitle,
                                           maximize
                                       }) => {
    const activeWindowAppKey = useAppSelector(selectActiveWindow);
    const { windowMinimize, windowInteract, close, deactivateWindow } = useDesktopWindow();
    const windowActive = activeWindowAppKey === appKey;

    if (!windowActive) stopFramePointerEvents(appKey);
    else {
        if (!isDraggingResizing.current) startFramePointerEvents(appKey);
    }

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!isNode(event.target)) return;
            if (containerRef.current &&
                !containerRef.current.contains(event.target)) {
                if (windowActive) {
                    deactivateWindow(appKey);
                }
            } else {
                if (!windowActive) {
                    windowInteract(appKey);
                }
            }
        };

        let timeoutId = setTimeout(() => {
            window.addEventListener('mousedown', handleClick, false);
        }, 50);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousedown', handleClick, false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowActive]);

    return (
        <Styled.TopBar
            isRainbow={rainbow}
            bgColor={windowBarColor}
            isActive={windowActive}
        >
            <Styled.WindowHeader>
                {windowBarIcon ? (
                    <Icon
                        icon={windowBarIcon}
                        style={Object.assign(
                            {},
                            { paddingLeft: 4, paddingRight: 4 },
                            !windowActive && { opacity: 0.5 }
                        )}
                        size={16}
                    />
                ) : (
                    <div style={{ width: 16 }} />
                )}
                <Styled.WindowHeaderText isActive={windowActive}>
                    {windowTitle}
                </Styled.WindowHeaderText>
            </Styled.WindowHeader>
            <Styled.WindowTopButtons>
                <Button
                    icon='minimize'
                    onClick={() => windowMinimize(appKey)}
                />
                <Button
                    icon='maximize'
                    onClick={maximize}
                />
                <div style={{ display: 'flex', paddingLeft: 2 }}>
                    <Button
                        icon='close'
                        onClick={() => close(appKey)}
                    />
                </div>
            </Styled.WindowTopButtons>
        </Styled.TopBar>
    );
};

export default TopBar;
