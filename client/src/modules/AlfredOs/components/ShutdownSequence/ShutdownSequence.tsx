import React, { useState, useEffect } from 'react';
import * as Styled from './ShutdownSequence.styles';
import { delay } from '../../../../shared/utils/general';
import {
    NORMAL_SHUTDOWN,
    SHUTDOWN_9,
    SHUTDOWN_3,
    SHUTDOWN_4,
    SHUTDOWN_5,
    SHUTDOWN_6,
    SHUTDOWN_7,
    SHUTDOWN_8
} from './ShutdownText';
import useShutdown from '../../hooks/useShutdown';

const SHUTDOWN_MAP = [
    NORMAL_SHUTDOWN,
    NORMAL_SHUTDOWN,
    SHUTDOWN_3,
    SHUTDOWN_4,
    SHUTDOWN_5,
    SHUTDOWN_6,
    SHUTDOWN_7,
    SHUTDOWN_8,
    SHUTDOWN_9
];

/**
 Renders shutdown sequence in a form of text
 @returns JSX.Element
 */
const ShutdownSequence: React.FC = () => {
    const { osLoaded, shutdownCount } = useShutdown();
    const [text, setText] = useState<string>('');
    const [off, setOff] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current;
        }
        let delayExtra = 0;
        if (i < text.length) {
            if (text[i] === '|') {
                let dumpText = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '|') {
                        i = j + 1;
                        break;
                    }
                    dumpText += text[j];
                }
                setText(curText + dumpText);
                typeText(
                    i,
                    curText + dumpText,
                    text,
                    setText,
                    callback,
                    refOverride
                );
                return;
            }
            if (text[i] === '>') {
                let delayTime = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '<') {
                        i = j + 1;
                        break;
                    }
                    delayTime += text[j];
                }
                delayExtra = parseInt(delayTime);
            }

            setTimeout(() => {
                setText(curText + text[i]);
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                );
            }, 20 + delayExtra);
        } else {
            callback();
        }
    };

    useEffect(() => {
        delay(2000).then(() => {
            setLoading(false);
            delay(1000).then(() => {
                const shutdown = SHUTDOWN_MAP[shutdownCount];
                typeText(0, '', shutdown, setText, () => {
                    setLoading(true);
                    delay(6000).then(() => {
                        if (shutdownCount !== 8) osLoaded();
                        else setOff(true);
                    });
                });

            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Styled.Shutdown
            data-testid='shutdown-sequence-loading'
        >
            {!off && <div className='blinking-cursor' data-testid='blinking-cursor' />}
        </Styled.Shutdown>
    ) : (
        <Styled.Shutdown>
            <Styled.Text data-testid='shutdown-text'>
                {text}
            </Styled.Text>
        </Styled.Shutdown>
    );
};

export default ShutdownSequence;
