/**
 Checks if a given value is a Node object.
 @param {any} value - The value to check.
 @returns {boolean} True if the value is a Node object, false otherwise.
 */
export const isNode = (value: any): value is Node => {
    return 'nodeType' in value;
};

/**
 Gets the current time in HH:MM:SS format.
 @returns {string} The current time in HH:MM:SS format.
 */
export const getTime = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time =
        h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    return time;
};

/**
 Delays the execution of a function by the specified amount of time.
 @param {number} time - The amount of time to delay in milliseconds.
 @returns {Promise<void>} A Promise that resolves after the specified amount of time has elapsed.
 */
export const delay = (time: number) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
};

/**
 Clamps a given value between a minimum and maximum value.
 @param {number} value - The value to clamp.
 @param {number} min - The minimum value.
 @param {number} max - The maximum value.
 @returns {number} The clamped value.
 */
export const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
};

/**
 Stops pointer events on a specified HTML frame element.
 @param {string} id - The ID of the frame element.
 @returns {void}
 */
export const stopFramePointerEvents = (id: string) => {
    const frame = document.getElementById(`frame-${id}`);
    if (frame) {
        frame.style.pointerEvents = 'none';
    }
};

/**
 Starts pointer events on a specified HTML frame element.
 @param {string} id - The ID of the frame element.
 @returns {void}
 */
export const startFramePointerEvents = (id: string) => {
    const frame = document.getElementById(`frame-${id}`);
    if (frame) {
        frame.style.pointerEvents = 'auto';
    }
};

/**
 *Returns random number in specified range
 *@function random
 *@param {number} min - lower boundary of range
 *@param {number} max - upper boundary of range
 *@returns {number} random number in range
 */
export const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min;

/**
 *Generates array in specified range and with specified step
 *@function range
 *@param {number} start - lower boundary of range
 *@param {number} end - upper boundary of range
 *@returns {Array<number>} random number in range
 */
export const range = (start: number, end: number, step = 1): number[] => {
    const output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};
