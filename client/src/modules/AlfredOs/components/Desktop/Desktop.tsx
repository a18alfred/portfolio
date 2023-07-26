import React from 'react';
import ShutdownSequence from '../ShutdownSequence/ShutdownSequence';
import TaskBar from '../TaskBar/TaskBar';
import * as Styled from './Desktop.styles';
import DesktopShortcuts from '../DesktopShortcuts/DesktopShortcuts';
import DesktopWindows from '../DesktopWindows/DesktopWindows';
import useShutdown from '../../hooks/useShutdown';

/**
 The Desktop component renders the main desktop interface, which includes windows, shortcuts, and the taskbar.
 If the system is shut down, it will render the ShutdownSequence component.
 @returns {JSX.Element} The Desktop component.
 */
const Desktop: React.FC = () => {
    const { isShutdown } = useShutdown();

    if (isShutdown) return (
        <ShutdownSequence />
    );

    return (
        <Styled.DesktopContainer>
            <DesktopWindows />
            <DesktopShortcuts />
            <TaskBar />
        </Styled.DesktopContainer>
    );
};

export default Desktop;
