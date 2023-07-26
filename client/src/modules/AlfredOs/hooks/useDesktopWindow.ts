import { useAppDispatch } from '../../../shared/state/hooks';
import {
    open_window,
    remove_window,
    toggle_minimize,
    window_interact,
    window_minimize,
    close_all, window_deactivate
} from '../../../shared/state/window/slice';
import { APPLICATIONS } from '../config/osApps';
import { startFramePointerEvents, stopFramePointerEvents } from '../../../shared/utils/general';

/**
 * Custom hook for interacting with desktop windows.
 * Provides functions for opening, closing, minimizing, and interacting with windows.
 */
const useDesktopWindow = () => {
    const dispatch = useAppDispatch();

    const open = (key: string) => {
        dispatch(open_window({
            key: key,
            name: APPLICATIONS[key].name,
            icon: APPLICATIONS[key].shortcutIcon
        }));
    };

    const toggleMinimize = (key: string, isMinimized: boolean) => {
        if (isMinimized) startFramePointerEvents(key);
        dispatch(toggle_minimize({ key }));
    };

    const windowMinimize = (key: string) => {
        stopFramePointerEvents(key);
        dispatch(window_minimize({ key }));
    };

    const windowInteract = (key: string) => {
        dispatch(window_interact({ key }));
    };

    const close = (key: string) => {
        dispatch(remove_window({ key }));
    };

    const deactivateWindow = (key: string) => {
        dispatch(window_deactivate({ key }));
    };

    const closeAll = () => {
        dispatch(close_all());
    };

    return { open, close, toggleMinimize, windowMinimize, windowInteract, deactivateWindow, closeAll };
};

export default useDesktopWindow;