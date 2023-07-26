import React, { useEffect, useState } from 'react';
import * as Styled from './Tabs.styles';
import { Icon } from '../../General';
import { useAppSelector } from '../../../../../shared/state/hooks';
import { selectDesktopWindows } from '../../../../../shared/state/window/slice';
import useDesktopWindow from '../../../hooks/useDesktopWindow';

/**
 React component representing the taskbar tabs.
 @return {JSX.Element} The taskbar tabs container.
 */
const Tabs = React.memo(() => {
    const windows = useAppSelector(selectDesktopWindows);
    const { toggleMinimize } = useDesktopWindow();
    const [lastActive, setLastActive] = useState('');

    useEffect(() => {
        let max = 0;
        let k = '';
        Object.keys(windows).forEach((key) => {
            if (windows[key].zIndex >= max) {
                max = windows[key].zIndex;
                k = key;
            }
        });
        setLastActive(k);
    }, [windows]);

    return (
        <Styled.TaskBarTabsContainer>
            {Object.keys(windows).map((key) => {
                return (
                    <Styled.TabContainerOuter
                        isActive={lastActive === key && !windows[key].minimized}
                        key={key}
                        onMouseDown={() => toggleMinimize(key, windows[key].minimized)}
                    >
                        <Styled.TabContainer
                            isActive={lastActive === key && !windows[key].minimized}
                        >
                            <Icon
                                size={18}
                                icon={windows[key].icon}
                                style={{ marginRight: 6 }}
                            />
                            <p>
                                {windows[key].name}
                            </p>
                        </Styled.TabContainer>
                    </Styled.TabContainerOuter>
                );
            })}
        </Styled.TaskBarTabsContainer>
    );
});

export default Tabs;
