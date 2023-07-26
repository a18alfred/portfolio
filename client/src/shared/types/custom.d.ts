declare module '*.pdf';
declare module '*.png';
declare module '*.webp';

declare module '*.ttf' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}

declare interface WindowAppProps {
    appKey: string;
}