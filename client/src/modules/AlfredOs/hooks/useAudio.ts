import { playAudio } from '../components/Audio/Audio';

import { useVolume } from './useVolume';
import { Sounds } from '../components/Audio/Sounds';

/**
 A custom hook that provides a play function for playing audio.
 Uses the useVolume hook to adjust the volume of the audio.
 @returns An object with a play function to play audio.
 */
export function useAudio() {
    const { volume: systemVolume } = useVolume();

    const play = (fileName: Sounds, vol = systemVolume) => {
        playAudio(fileName, vol);
    };

    return {
        play
    };
};
