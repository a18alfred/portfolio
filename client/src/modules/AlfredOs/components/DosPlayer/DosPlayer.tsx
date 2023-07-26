import React, { useEffect, useRef, useState } from 'react';

import { DosPlayer as Instance, DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
    appKey: string;
}

/**
 * The DosPlayer component.
 *  @param {PlayerProps} props - The props of the component.
 * @param {number} props.width - The width of the player.
 * @param {number} props.height - The height of the player.
 * @param {string} props.bundleUrl - The URL of the DOS game bundle.
 * @param {string} props.appKey - The unique identifier of the app.
 * @returns {JSX.Element} - The DosPlayer component.
 */
export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        const instance = Dos(root);

        setDos(instance);
        const elements = rootRef.current.getElementsByClassName('flex-grow-0');

        while (elements.length > 0) {
            elements[0].remove();
        }

        return () => {
            instance.stop();
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl);
        }
    }, [dos, props.bundleUrl]);

    return (
        <div
            id={`frame-${props.appKey}`}
            ref={rootRef}
            style={{
                width: props.width,
                height: props.height,
                position: 'absolute'
            }}
        />
    );
}
