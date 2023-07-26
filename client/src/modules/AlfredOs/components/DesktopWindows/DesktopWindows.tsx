import React from 'react';
import { APPLICATIONS } from '../../config/osApps';
import * as Styled from './DesktopWindows.styles';
import { useAppSelector } from '../../../../shared/state/hooks';
import { selectDesktopWindows } from '../../../../shared/state/window/slice';

/**
 Renders all the open windows on the desktop.
 @returns {JSX.Element} DesktopWindows component
 */
const DesktopWindows = () => {
    const windows = useAppSelector(selectDesktopWindows);

    return (
        <>
            {Object.keys(windows).map((key) => {
                const app = APPLICATIONS[key];
                return (
                    <Styled.WindowContainer
                        key={`win-${key}`}
                        zIndex={windows[key].zIndex}
                        minimized={windows[key].minimized}
                    >
                        <app.component appKey={key} {...app.props} />
                    </Styled.WindowContainer>
                );
            })}
        </>
    );
};

export default DesktopWindows;
