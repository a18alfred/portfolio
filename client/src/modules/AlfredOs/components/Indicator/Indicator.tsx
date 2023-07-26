import React from 'react';
import * as Styled from './Indicator.styles';
import { DRAG_RESIZE_BORDER_WIDTH } from '../../config/osApps';

export interface IndicatorProps {
    indicatorRef: React.RefObject<HTMLDivElement>;
}

/**
 * Renders a draggable and resizable indicator
 * @function
 * @param {React.MutableRefObject} indicatorRef - The ref object for the indicator element.
 * @returns {JSX.Element} A React JSX element representing the indicator.
 */
const Indicator: React.FC<IndicatorProps> = ({ indicatorRef }) => {
    return (
        <Styled.Draggable
            data-testid='draggable'
            ref={indicatorRef}
        >
            <div
                style={{
                    position: 'absolute',
                    width: 32,
                    height: 32,
                    bottom: -20,
                    right: -20
                }}
            />
            <Styled.HozDrag
                borderWidth={DRAG_RESIZE_BORDER_WIDTH}
            />
            <Styled.VertDragContainer borderWidth={DRAG_RESIZE_BORDER_WIDTH}>
                <Styled.VertDrag
                    borderWidth={DRAG_RESIZE_BORDER_WIDTH}
                />
                <Styled.VertDrag
                    borderWidth={DRAG_RESIZE_BORDER_WIDTH}
                />
            </Styled.VertDragContainer>
            <Styled.HozDrag
                borderWidth={DRAG_RESIZE_BORDER_WIDTH}
            />
        </Styled.Draggable>
    );
};

export default Indicator;
