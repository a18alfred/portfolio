import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Start.styles';
import { Icon } from '../../General';
import useDesktopWindow from '../../../hooks/useDesktopWindow';
import useShutdown from '../../../hooks/useShutdown';
import { entries } from './Entries';

/**
 Renders Start menu button and start menu
 @returns JSX.Element
 */
const Start: React.FC = () => {
    const [startWindowOpen, setStartWindowOpen] = useState(false);
    const lastClickInside = useRef(false);
    const { closeAll } = useDesktopWindow();
    const { shutdown } = useShutdown();

    const onCheckClick = () => {
        if (lastClickInside.current) {
            setStartWindowOpen(true);
        } else {
            setStartWindowOpen(false);
        }
        lastClickInside.current = false;
    };

    useEffect(() => {
        window.addEventListener('mousedown', onCheckClick, false);
        return () => {
            window.removeEventListener('mousedown', onCheckClick, false);
        };
    }, []);

    const onStartWindowClicked = () => {
        setStartWindowOpen(true);
        lastClickInside.current = true;
    };

    const toggleStartWindow = () => {
        lastClickInside.current = !startWindowOpen;
    };

    const startShutdown = () => {
        setTimeout(() => {
            shutdown();
            closeAll();
        }, 500);
    };

    return (
        <>
            {startWindowOpen && (
                <Styled.StartWindow
                    data-testid='start-window'
                    onMouseDown={onStartWindowClicked}
                >
                    <Styled.StartWindowInner>
                        <Styled.VerticalStartContainer>
                            <Styled.VerticalText>AlfredOS 98 React Edition</Styled.VerticalText>
                        </Styled.VerticalStartContainer>
                        <Styled.StartWindowContent>
                            <Styled.StartMenuSpace />
                            <Styled.StartMenuOption
                                isActive={false}
                            >
                                <Icon
                                    size={32}
                                    icon='winUpdate'
                                />
                                <Styled.StartMenuText>
                                    Обновить Систему
                                </Styled.StartMenuText>
                            </Styled.StartMenuOption>
                            <Styled.StartMenuLine />
                            {
                                entries.map((entry, index) => (
                                    <Styled.StartMenuOption
                                        key={entry.label}
                                        isActive={false}
                                    >
                                        <Icon
                                            size={32}
                                            icon={entry.icon}
                                        />
                                        <Styled.StartMenuText>
                                            {entry.label}
                                        </Styled.StartMenuText>
                                    </Styled.StartMenuOption>
                                ))
                            }
                            <Styled.StartMenuLine />
                            <Styled.StartMenuOption
                                isActive={true}
                                onMouseDown={startShutdown}
                            >
                                <Icon
                                    size={32}
                                    icon='computerBig'
                                />
                                <Styled.StartMenuText>
                                    <u>З</u>авершение работы...
                                </Styled.StartMenuText>
                            </Styled.StartMenuOption>
                        </Styled.StartWindowContent>
                    </Styled.StartWindowInner>
                </Styled.StartWindow>
            )}
            <Styled.StartContainerOuter
                data-testid='start-container'
                isActive={startWindowOpen}
                onMouseDown={toggleStartWindow}
            >
                <Styled.StartContainer isActive={startWindowOpen}>
                    <Icon
                        size={18}
                        icon='windowsStartIcon'
                        style={{ marginRight: 4 }}
                    />
                    <Styled.TaskBarText>Пуск</Styled.TaskBarText>
                </Styled.StartContainer>
            </Styled.StartContainerOuter>
        </>
    );
};

export default Start;
