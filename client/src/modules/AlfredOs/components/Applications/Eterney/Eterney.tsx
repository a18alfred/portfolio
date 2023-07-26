import React, { useEffect } from 'react';
import useDesktopWindow from '../../../hooks/useDesktopWindow';

export interface EterneyProps extends WindowAppProps {
}

/**
 This component simple redirect to www.eterney.com website
 */
const Eterney: React.FC<EterneyProps> = (props) => {
    const { close } = useDesktopWindow();
    useEffect(() => {
        window.open(`https://www.eterney.com/`);
        close(props.appKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default Eterney;
