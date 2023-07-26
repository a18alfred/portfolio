import { useAppDispatch, useAppSelector } from '../../../shared/state/hooks';
import {
    os_loaded,
    selectSystemIsShutdown,
    selectSystemShutdownCount,
    start_shutdown
} from '../../../shared/state/system/slice';

/**
 A hook that provides functions to start and stop the system shutdown process, as well as determining the current state of the system shutdown process.
 @returns {object} An object containing functions to start and stop the system shutdown process, as well as determining the current state of the system shutdown process.
 */
const useShutdown = () => {
    const isShutdown = useAppSelector(selectSystemIsShutdown);
    const shutdownCount = useAppSelector(selectSystemShutdownCount);
    const dispatch = useAppDispatch();

    const shutdown = () => {
        dispatch(start_shutdown());
    };

    const osLoaded = () => {
        dispatch(os_loaded());
    };

    return { shutdown, osLoaded, isShutdown, shutdownCount };
};

export default useShutdown;