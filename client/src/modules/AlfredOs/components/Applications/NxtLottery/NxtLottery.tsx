import React, { useEffect } from 'react';
import useDesktopWindow from '../../../hooks/useDesktopWindow';

export interface NxtLotteryProps extends WindowAppProps {
}

/**
 This component simple redirect to nxtlottery.com website
 */
const NxtLottery: React.FC<NxtLotteryProps> = (props) => {
    const { close } = useDesktopWindow();
    useEffect(() => {
        window.open(`https://www.nxtlottery.com/`);
        close(props.appKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default NxtLottery;
