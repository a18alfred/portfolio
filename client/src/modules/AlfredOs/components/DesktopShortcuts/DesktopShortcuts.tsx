import React from 'react';
import * as Styled from './DesktopShortcuts.styles';
import { APPLICATIONS } from '../../config/osApps';
import Shortcut from '../Shortcut/Shortcut';

/**
 * Component that renders all desktop shortcuts.
 * @returns {JSX.Element} DesktopShortcuts component
 */
const DesktopShortcuts = () => {
    return (
        <Styled.ShortcutsContainer>
            {Object.values(APPLICATIONS).map((app, index) => (
                <Shortcut
                    key={app.name}
                    appKey={app.key}
                    icon={app.shortcutIcon}
                    shortcutName={app.name}
                />
            ))}
        </Styled.ShortcutsContainer>
    );
};


export default DesktopShortcuts;
