import React, { useEffect } from 'react';
import * as Styled from './Loader.styles';
import Logo from '../Logo/Logo';
import useLockedBody from '../../hooks/useLockedBody';

export interface Props {
    isOnScreen: boolean;
    loadingDuration: number;
}

/**
 *Renders main loading component
 *@function Loader
 *@param {boolean} isOnScreen - specifies whether element is on screen
 *@param {number} loadingDuration - duration of loading in milliseconds
 *@returns {JSX.Element}
 */
const Loader: React.FC<Props> = ({ isOnScreen, loadingDuration }) => {
    const [locked, setLocked] = useLockedBody(true, 'root');

    useEffect(() => {
        if (locked && !isOnScreen) {
            setLocked(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnScreen]);

    return (
        <Styled.Container isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
            <Logo />
            <Styled.TextContainer>
                <Styled.ScrollText loadingDuration={loadingDuration}>
                    <br />
                    JavaScript <br />
                    TypeScript <br />
                    React <br />
                    Next.js <br />
                    Node.js <br />
                    Python <br />
                    Django <br />
                    Music 🎸
                </Styled.ScrollText>
            </Styled.TextContainer>
        </Styled.Container>
    );
};

export default Loader;
