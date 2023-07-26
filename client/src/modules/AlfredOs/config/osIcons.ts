import windowResize from '../assets/icons/windowResize.png';
import maximize from '../assets/icons/maximize.png';
import minimize from '../assets/icons/minimize.png';
import computerBig from '../assets/icons/computerBig.png';
import computerSmall from '../assets/icons/computerSmall.png';
import myComputer from '../assets/icons/myComputer.png';
import portfolioIcon from '../assets/icons/portfolioIcon.png';
import doomIcon from '../assets/icons/doomIcon.png';
import volumeOn from '../assets/icons/volumeOn.png';
import volumeOff from '../assets/icons/volumeOff.png';
import windowExplorerIcon from '../assets/icons/windowExplorerIcon.png';
import windowsStartIcon from '../assets/icons/windowsStartIcon.png';
import close from '../assets/icons/close.png';
import applicationHourglassIcon from '../assets/icons/application-hourglass-icon.png';
import dirExecIcon from '../assets/icons/dir-exec-icon.png';
import searchIcon from '../assets/icons/search-file-icon.png';
import settingsIcon from '../assets/icons/settings-icon.png';
import winUpdate from '../assets/icons/win-update.png';
import winampIcon from '../assets/icons/winampIcon.png';
import githubIcon from '../assets/icons/githubIcon.png';
import resumeIcon from '../assets/icons/resumeIcon.png';
import vsCodeIcon from '../assets/icons/vsCodeIcon.png';
import eterneyIcon from '../assets/icons/eterneyIcon.png';
import nxtlotteryIcon from '../assets/icons/nxtlotteryIcon.png';
import vkIcon from '../assets/icons/vkIcon.png';
import telegramIcon from '../assets/icons/telegramIcon.png';
import explorerIcon from '../assets/icons/explorerIcon.png';
import porisuemIcon from '../assets/icons/porisuemIcon.png';

/**
 Available system icons
 */
const icons = {
    windowResize: windowResize,
    maximize: maximize,
    minimize: minimize,
    computerBig: computerBig,
    computerSmall: computerSmall,
    myComputer: myComputer,
    portfolioIcon: portfolioIcon,
    doomIcon: doomIcon,
    volumeOn: volumeOn,
    volumeOff: volumeOff,
    close: close,
    windowExplorerIcon: windowExplorerIcon,
    windowsStartIcon: windowsStartIcon,
    applicationHourglassIcon: applicationHourglassIcon,
    dirExecIcon: dirExecIcon,
    searchIcon: searchIcon,
    settingsIcon: settingsIcon,
    winUpdate: winUpdate,
    winampIcon: winampIcon,
    githubIcon: githubIcon,
    resumeIcon: resumeIcon,
    vsCodeIcon: vsCodeIcon,
    eterneyIcon: eterneyIcon,
    nxtlotteryIcon: nxtlotteryIcon,
    vkIcon: vkIcon,
    telegramIcon: telegramIcon,
    explorerIcon: explorerIcon,
    porisuemIcon: porisuemIcon
};

export type IconName = keyof typeof icons;

/**
 Returns a React component that displays the icon corresponding to the given name.
 @param iconName The name of the icon to display.
 @returns A React component that displays the icon.
 */
const getIconByName = (iconName: IconName): string | undefined => {
    return icons[iconName];
};

export default getIconByName;
