import { Sounds } from './Sounds';

export const DEFAULT_VOLUME = 0.5;

const MIN_VOLUME = 0;
const MAX_VOLUME = 1;

const VOLUME_MULTIPLIER = 0.5;

/**
 Plays an audio file with the given file name and volume.
 @param {Sounds} fileName - The name of the audio file to play.
 @param {number} volume - The volume at which to play the audio
 @returns {Promise<void>} A Promise that resolves when the audio has finished playing.
 */
export function playAudio(fileName: Sounds, volume: number): Promise<void> {
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/${fileName}`);

    if (volume < MIN_VOLUME || volume > MAX_VOLUME) {
        audio.volume = DEFAULT_VOLUME * VOLUME_MULTIPLIER;
    } else {
        audio.volume = volume * VOLUME_MULTIPLIER;
    }

    return audio.play();
}
