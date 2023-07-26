import React, { useEffect } from 'react';
import useDesktopWindow from '../../../hooks/useDesktopWindow';

export interface PorisuemProps extends WindowAppProps {
}

/**
 This component simple redirect to порисуем.рф
 */
const Porisuem: React.FC<PorisuemProps> = (props) => {
    const { close } = useDesktopWindow();
    useEffect(() => {
        window.open(`https://порисуем.рф`);
        close(props.appKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default Porisuem;
