import { useAppDispatch, useAppSelector } from '../../../shared/state/hooks';
import { change_volume, selectSystemVolume } from '../../../shared/state/system/slice';

/**
 A hook for managing the volume state and dispatching changes to the system slice of the Redux store.
 @returns an object with the current volume and a function to set the volume
 */
export function useVolume() {
    const volume = useAppSelector(selectSystemVolume);
    const dispatch = useAppDispatch();

    /**
     * Sets the volume to a new value and dispatches the change to the Redux store.
     * @param newVolume - the new volume value to set
     */
    const setVolume = (newVolume: number) => {
        dispatch(change_volume({ volume: newVolume }));
    };

    return {
        volume,
        setVolume
    };
}