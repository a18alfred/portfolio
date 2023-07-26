import { IconName } from '../../modules/AlfredOs/config/osIcons';
import React from 'react';

type ExtendedWindowAppProps<T> = T & WindowAppProps;

export interface IDesktopApp {
    key: string;
    name: string;
    shortcutIcon: IconName;
    component: React.FC<ExtendedWindowAppProps<any>>;
    props: {
        initialWidth?: number,
        initialHeight?: number,
    };
}

export type DesktopApps = {
    [key in string]: IDesktopApp
}

