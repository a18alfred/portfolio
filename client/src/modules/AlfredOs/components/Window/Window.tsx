import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Window.styles';
import { IconName } from '../../config/osIcons';
import Icon from '../General/Icon/Icon';
import Indicator from '../Indicator/Indicator';
import TopBar from './TopBar/Topbar';
import { startFramePointerEvents, stopFramePointerEvents } from '../../../../shared/utils/general';

export interface WindowProps {
    appKey: string;
    width: number;
    height: number;
    top: number;
    left: number;
    windowTitle?: string;
    bottomLeftText?: string;
    rainbow?: boolean;
    windowBarColor?: string;
    windowBarIcon?: IconName;
    onWidthChange?: (width: number) => void;
    onHeightChange?: (height: number) => void;
    children: React.ReactNode;
}

/**
 A window component used to create a resizable and draggable window.
 @param {object} props - The props object.
 @param {string} props.appKey - The key for the app.
 @param {number} props.width - The initial width of the window.
 @param {number} props.height - The initial height of the window.
 @param {number} props.top - The initial top position of the window.
 @param {number} props.left - The initial left position of the window.
 @param {string} [props.windowTitle] - The title of the window.
 @param {string} [props.bottomLeftText] - The text shown at the bottom left corner of the window.
 @param {boolean} [props.rainbow] - Whether to show the rainbow effect on the window.
 @param {string} [props.windowBarColor] - The background color of the window bar.
 @param {string} [props.windowBarIcon] - The name of the icon used in the window bar.
 @param {(width: number) => void} [props.onWidthChange] - Callback function that is called when the width of the window changes.
 @param {(height: number) => void} [props.onHeightChange] - Callback function that is called when the height of the window changes.
 @param {React.ReactNode} props.children - The child elements to render in the window.
 @returns {JSX.Element} The Window component.
 */
const Window: React.FC<WindowProps> = React.memo((props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const isDraggingResizing = useRef<boolean>(false);
    const dragProps = useRef<{
        dragStartX: any;
        dragStartY: any;
    }>();
    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [isMaximized, setIsMaximized] = useState(false);
    const [preMaxSize, setPreMaxSize] = useState({
        width,
        height,
        top,
        left
    });

    const displayIndicator = () => {
        if (!indicatorRef.current) return;
        stopFramePointerEvents(props.appKey);
        indicatorRef.current.style.top = String(top) + 'px';
        indicatorRef.current.style.left = String(left) + 'px';
        indicatorRef.current.style.width = String(width) + 'px';
        indicatorRef.current.style.height = String(height) + 'px';
        indicatorRef.current.style.zIndex = String(1000);
        indicatorRef.current.style.opacity = String(1);
    };

    const hideIndicator = () => {
        if (!indicatorRef.current) return;
        startFramePointerEvents(props.appKey);
        indicatorRef.current.style.opacity = String(0);
        indicatorRef.current.style.zIndex = String(-10000);
    };

    const startResizeDrag = (e: React.MouseEvent, isDrag: boolean) => {
        e.preventDefault();
        isDraggingResizing.current = true;
        displayIndicator();
        if (isDrag) {
            dragProps.current = {
                dragStartX: e.clientX,
                dragStartY: e.clientY
            };
            window.addEventListener('mousemove', onDrag, false);
            window.addEventListener('mouseup', stopDrag, false);
        } else {
            window.addEventListener('mouseup', stopResize, false);
            window.addEventListener('mousemove', onResize, false);
        }
    };

    const onResize = (e: any) => {
        e.preventDefault();
        if (!indicatorRef.current) return;
        const curWidth = e.clientX - left;
        const curHeight = e.clientY - top;
        indicatorRef.current.style.width = curWidth > 520 ? `${curWidth}px` : '520px';
        indicatorRef.current.style.height = curHeight > 420 ? `${curHeight}px` : '420px';
    };

    const stopResize = (e: any) => {
        e.preventDefault();
        window.removeEventListener('mousemove', onResize, false);
        window.removeEventListener('mouseup', stopResize, false);
        if (!indicatorRef.current) return;
        setWidth(parseInt(indicatorRef.current.style.width));
        setHeight(parseInt(indicatorRef.current.style.height));
        isDraggingResizing.current = false;
        hideIndicator();
    };

    const onDrag = ({ clientX, clientY }: MouseEvent) => {
        if (!indicatorRef.current) return;
        const { x, y } = getXYFromDragProps(clientX, clientY);
        indicatorRef.current.style.top = String(y) + 'px';
        indicatorRef.current.style.left = String(x) + 'px';
    };

    const stopDrag = ({ clientX, clientY }: MouseEvent) => {
        const { x, y } = getXYFromDragProps(clientX, clientY);
        setTop(y);
        setLeft(x);
        window.removeEventListener('mousemove', onDrag, false);
        window.removeEventListener('mouseup', stopDrag, false);
        isDraggingResizing.current = false;
        hideIndicator();
    };

    const getXYFromDragProps = (
        clientX: number,
        clientY: number
    ): { x: number; y: number } => {
        if (!dragProps.current) return { x: 0, y: 0 };
        const { dragStartX, dragStartY } = dragProps.current;

        const x = clientX - dragStartX + left;
        const y = clientY - dragStartY + top;

        return { x, y };
    };

    useEffect(() => {
        if (contentRef.current) {
            props.onWidthChange && props.onWidthChange(contentRef.current.getBoundingClientRect().width);
            props.onHeightChange && props.onHeightChange(contentRef.current.getBoundingClientRect().height);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onWidthChange, width, props.onHeightChange, height]);

    const maximize = () => {
        if (isMaximized) {
            setWidth(preMaxSize.width);
            setHeight(preMaxSize.height);
            setTop(preMaxSize.top);
            setLeft(preMaxSize.left);
            setIsMaximized(false);
        } else {
            setPreMaxSize({
                width,
                height,
                top,
                left
            });
            setWidth(window.innerWidth);
            setHeight(window.innerHeight - 32);
            setTop(0);
            setLeft(0);
            setIsMaximized(true);
        }
    };

    return (
        <div ref={containerRef} style={{ display: 'flex' }}>
            <Styled.WindowContainer
                data-testid='window-container'
                style={{ width, height, left, top }}
            >
                <Styled.WindowBorderOuter>
                    <Styled.WindowBorderInner>
                        <Styled.DragHitbox
                            data-testid='window-hit-box'
                            onDoubleClick={maximize}
                            onMouseDown={e => startResizeDrag(e, true)}
                        />
                        <TopBar
                            containerRef={containerRef}
                            appKey={props.appKey}
                            windowTitle={props.windowTitle}
                            rainbow={props.rainbow}
                            windowBarColor={props.windowBarColor}
                            windowBarIcon={props.windowBarIcon}
                            isDraggingResizing={isDraggingResizing}
                            maximize={maximize}
                        />
                        <Styled.ContentOuter>
                            <Styled.ContentInner>
                                <Styled.Content ref={contentRef}>
                                    {props.children}
                                </Styled.Content>
                            </Styled.ContentInner>
                        </Styled.ContentOuter>
                        <Styled.ResizeHitbox
                            onMouseDown={e => startResizeDrag(e, false)}
                        />
                        <Styled.BottomBar>
                            <Styled.InsetBorder
                                style={{ flex: 5 / 7, alignItems: 'center' }}
                            >
                                <Styled.BottomLeftText>
                                    {props.bottomLeftText}
                                </Styled.BottomLeftText>
                            </Styled.InsetBorder>
                            <Styled.InsetBorder
                                style={{ width: 16, marginLeft: 2 }}
                            />
                            <Styled.InsetBorder
                                style={{ width: 16, marginLeft: 2 }}
                            />
                            <Styled.InsetBorder
                                style={{ flex: 2 / 7, justifyContent: 'flex-end', padding: 0, marginLeft: 2 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <Icon size={12} icon='windowResize' />
                                </div>
                            </Styled.InsetBorder>
                        </Styled.BottomBar>
                    </Styled.WindowBorderInner>
                </Styled.WindowBorderOuter>
            </Styled.WindowContainer>

            <Styled.IndicatorWrapper>
                <Indicator
                    indicatorRef={indicatorRef}
                />
            </Styled.IndicatorWrapper>
        </div>
    );
});

export default Window;
