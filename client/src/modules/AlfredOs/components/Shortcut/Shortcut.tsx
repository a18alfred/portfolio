import React, { useEffect, useRef, useState } from 'react';
import { IconName } from '../../config/osIcons';
import { Icon } from '../General';
import useDesktopWindow from '../../hooks/useDesktopWindow';
import * as Styled from './Shortcut.styles';
import { isNode } from '../../../../shared/utils/general';

export interface DesktopShortcutProps {
    icon: IconName;
    shortcutName: string;
    appKey: string;
}

/**
 Desktop shortcut component.
 @param {string} icon - Name of the icon to display.
 @param {string} shortcutName - Name of the shortcut to display.
 @param {string} appKey - Key of the application associated with the shortcut.
 @returns {JSX.Element} - The desktop shortcut element.
 */
const Shortcut: React.FC<DesktopShortcutProps> = React.memo(({
                                                                 icon,
                                                                 shortcutName,
                                                                 appKey
                                                             }) => {
    const { open } = useDesktopWindow();
    const [isSelected, setIsSelected] = useState(false);
    const [lastSelected, setLastSelected] = useState(false);
    const containerRef = useRef<any>();
    const requiredIcon = require(`../../assets/icons/${icon}.png`);

    const handleDoubleClick = () => {
        open(appKey);
        setIsSelected(false);
    };

    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent) => {
            if (isNode(target))
                if (containerRef.current &&
                    !containerRef.current.contains(target)) {
                    if (!isSelected && lastSelected) {
                        setLastSelected(false);
                    }
                    setIsSelected(false);
                } else {
                    setIsSelected(true);
                    setLastSelected(true);
                }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, lastSelected, isSelected]);

    return (
        <Styled.AppShortcutContainer
            data-testid='shortcut-container'
            onDoubleClick={handleDoubleClick}
            ref={containerRef}
        >
            <Styled.IconWrapper>
                <Styled.IconSelection
                    isSelected={isSelected}
                    icon={requiredIcon}
                />
                <Icon icon={icon} />
            </Styled.IconWrapper>
            <Styled.ShortcutTextWrapper
                isSelected={isSelected}
                lastSelected={lastSelected}
            >
                <Styled.ShortcutText>
                    {shortcutName}
                </Styled.ShortcutText>
            </Styled.ShortcutTextWrapper>
        </Styled.AppShortcutContainer>
    );
});

export default Shortcut;
