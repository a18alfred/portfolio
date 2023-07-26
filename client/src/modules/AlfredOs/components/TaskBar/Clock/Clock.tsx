import React, { useEffect, useState } from 'react';

const Clock = React.memo(() => {
    const getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let mins = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + mins;
    };
    const [time, setTime] = useState(getTime());

    const updateTime = () => {
        setTime(getTime());
    };

    useEffect(() => {
        const intervalId = setTimeout(() => {
            updateTime();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateTime]);

    return (
        <p>
            {time}
        </p>
    );
});

export default Clock;
