import { IconName } from '../../../modules/AlfredOs/config/osIcons';

export interface IDesktopWindow {
    key: string;
    zIndex: number;
    minimized: boolean;
    name: string;
    icon: IconName;
};

export type DesktopWindows = {
    [key in string]: IDesktopWindow
};

export type WindowState = {
    desktopWindows: DesktopWindows
    highestZIndex: number,
    activeWindowAppKey: string | null
};

export interface WindowInteractProps {
    key: string;
}

export interface OpenWindowProps {
    key: string;
    name: string;
    icon: IconName;
}