import React, { useEffect } from 'react';
import useDesktopWindow from '../../../hooks/useDesktopWindow';

export interface GithubProps extends WindowAppProps {
}

/**
 This component simple redirect to github.com/a18alfred
 */
const Github: React.FC<GithubProps> = (props) => {
    const { close } = useDesktopWindow();
    useEffect(() => {
        window.open(`https://github.com/a18alfred`);
        close(props.appKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default Github;
