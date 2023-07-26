import React from 'react';
import * as Styled from './TaskBar.styles';
import Tabs from './Tabs/Tabs';
import Clock from './Clock/Clock';
import Start from './Start/Start';
import Sound from './Sound/Sound';

/**
 Renders the TaskBar component which includes the Start button, application tabs, system sound, and clock.
 @returns JSX.Element
 */
const TaskBar: React.FC = () => {
    return (
        <Styled.TaskBarOuter
            data-testid='task-bar-test-id'
        >
            <Styled.TaskBarInner>
                <Styled.TaskBarInnerWrapper>
                    <Start />
                    <Tabs />
                </Styled.TaskBarInnerWrapper>
                <Styled.TimeWrapper>
                    <Sound />
                    <Clock />
                </Styled.TimeWrapper>
            </Styled.TaskBarInner>
        </Styled.TaskBarOuter>
    );
};

export default TaskBar;
