import ThisComputer from '../components/Applications/ThisComputer/ThisComputer';
import PortfolioExplorer from '../components/Applications/PortfolioExplorer/PortfolioExplorer';
import Doom from '../components/Applications/Doom/Doom';
import { DesktopApps } from '../../../shared/types/desktop';
import WebampPlayer from '../components/Applications/WebampPlayer/WebampPlayer';
import Github from '../components/Applications/Github/Github';
import VsCode from '../components/Applications/VsCode/VsCode';
import Resume from '../components/Applications/Resume/Resume';
import Eterney from '../components/Applications/Eterney/Eterney';
import NxtLottery from '../components/Applications/NxtLottery/NxtLottery';
import Porisuem from '../components/Applications/Porisuem/Porisuem';

/**
 Border width of window drag/resize indicator
 */
export const DRAG_RESIZE_BORDER_WIDTH = 6;

/**
 Array of desktop applications ready to interact
 */
export const APPLICATIONS: DesktopApps = {
    computer: {
        key: 'computer',
        name: 'Мой компьютер',
        shortcutIcon: 'computerBig',
        component: ThisComputer,
        props: {
            initialWidth: 1040,
            initialHeight: 760
        }
    },
    portfolio: {
        key: 'portfolio',
        name: 'Портфолио',
        shortcutIcon: 'portfolioIcon',
        component: PortfolioExplorer,
        props: {}
    },
    doom: {
        key: 'doom',
        name: 'Doom',
        shortcutIcon: 'doomIcon',
        component: Doom,
        props: {
            initialWidth: 980,
            initialHeight: 670
        }
    },
    nxtlottery: {
        key: 'nxtlottery',
        name: 'NxtLottery',
        shortcutIcon: 'nxtlotteryIcon',
        component: NxtLottery,
        props: {}
    },

    resume: {
        key: 'resume',
        name: 'Резюме',
        shortcutIcon: 'resumeIcon',
        component: Resume,
        props: {}
    },
    vscode: {
        key: 'vscode',
        name: 'VS Code',
        shortcutIcon: 'vsCodeIcon',
        component: VsCode,
        props: {}
    },
    winamp: {
        key: 'winamp',
        name: 'Winamp',
        shortcutIcon: 'winampIcon',
        component: WebampPlayer,
        props: {}
    },
    eterney: {
        key: 'eterney',
        name: 'Eterney',
        shortcutIcon: 'eterneyIcon',
        component: Eterney,
        props: {}
    },
    github: {
        key: 'github',
        name: 'Github',
        shortcutIcon: 'githubIcon',
        component: Github,
        props: {}
    },
    porisuem: {
        key: 'porisuem',
        name: 'Порисуем',
        shortcutIcon: 'porisuemIcon',
        component: Porisuem,
        props: {}
    }
};

