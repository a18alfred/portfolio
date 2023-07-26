/**
 Hook that calculates the initial size and position of a window based on the window size and some optional parameters.
 @param {object} options - Options object.
 @param {number} [options.margin=0] - The margin to apply to the window (in pixels).
 @param {number} [options.maxWidth] - The maximum width of the window (in pixels).
 @param {number} [options.maxHeight] - The maximum height of the window (in pixels).
 @returns {object} An object containing the initial width, height, left position, and top position of the window.
 */
export default function useInitialWindowSize({ margin, maxWidth, maxHeight }: {
    margin?: number
    maxWidth?: number
    maxHeight?: number
}) {
    let m = margin || 0;

    const winW = window.innerWidth;
    const winH = window.innerHeight;

    let mW = maxWidth || winW;
    let mH = maxHeight || winH;

    let initWidth = winW - m;
    let initHeight = winH - m;

    initWidth = initWidth > mW ? mW : initWidth;
    initHeight = initHeight > mH ? mH : initHeight;

    let initLeft = Math.floor((winW - initWidth) / 2);
    let initTop = Math.floor((winH - initHeight) / 2) - 20;

    initLeft = initLeft < 0 ? 0 : initLeft;
    initTop = initTop < 0 ? 0 : initTop;

    return { initWidth, initHeight, initLeft, initTop };
}
