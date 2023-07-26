import berezhokIcon from '../assets/projects/icons/Berezhok.webp';
import eterneyIcon from '../assets/projects/icons/Eterney.png';
import nxtLotteryIcon from '../assets/projects/icons/NxtLottery.webp';
import partnerIcon from '../assets/projects/icons/Partner.png';
import porisuemIcon from '../assets/projects/icons/Porisuem.webp';
import portfolioIcon from '../assets/projects/icons/Portfolio.webp';
import prodServiceIcon from '../assets/projects/icons/ProdService.webp';
import streetTrendIcon from '../assets/projects/icons/StreetTrend.webp';

import berezhokCardSm from '../assets/projects/screenshots/Berezhol_card_sm.webp';
import eterneyCardSm from '../assets/projects/screenshots/Eterney_card_sm.webp';
import nxtLotteryCardSm from '../assets/projects/screenshots/NxtLottery_card_sm.webp';
import partnerCardSm from '../assets/projects/screenshots/Partner_card_sm.webp';
import porisuemCardSm from '../assets/projects/screenshots/Porisuem_card_sm.webp';
import portfolioCardSm from '../assets/projects/screenshots/Portfolio_card_sm.webp';
import prodServiceCardSm from '../assets/projects/screenshots/ProdService_card_sm.webp';
import streetTrendCardSm from '../assets/projects/screenshots/StreetTrend_card_sm.webp';

export type ProjectInfoCard = {
    id: number;
    title: string;
    projectName: string;
    projectLogo: string;
    description: string;
    stack: string;
    screenshot: string;
}

export const projectCards: ProjectInfoCard[] = [
    {
        id: 1,
        title: 'Иновационная WEB3-лотерея',
        projectName: 'NxtLottery',
        projectLogo: nxtLotteryIcon,
        description: ' Лотерея на основе блокчейна, предлагающая полностью автоматизированный и прозрачный процесс покупки билетов, распределения выигрышей и отображения результатов.',
        stack: 'React, Redux Toolkit, Styled components, TypeScript, Workbox, Ethers, Solidity',
        screenshot: nxtLotteryCardSm
    },
    {
        id: 2,
        title: 'Блокчейн стена памяти',
        projectName: 'Eterney',
        projectLogo: eterneyIcon,
        description: 'Web3-приложение, предназначенное для сохранения памяти об ушедших близких в сети Ethereum.',
        stack: 'React, Redux Toolkit, Styled components, TypeScript, Workbox, Ethers, Solidity',
        screenshot: eterneyCardSm
    },
    {
        id: 3,
        title: 'Групповая доска для рисования',
        projectName: 'Порисуем',
        projectLogo: porisuemIcon,
        description: 'Проект, предоставляющий возможность для веселого времяпрепровождение с друзьями и детьми через рисование и общение.',
        stack: 'Next.js, Tailwind CSS, Framer Motion, Recoil, Node.js, Express, Socket.IO, TypeScript',
        screenshot: porisuemCardSm
    },
    {
        id: 4,
        title: 'Интернет-магазин обуви',
        projectName: 'Street Trend',
        projectLogo: streetTrendIcon,
        description: 'Современная платформа электронной коммерции, предоставляющая удобный пользовательский интерфейс и функционал для успешной онлайн торговли.',
        stack: 'Next.js, Redux, Styled components, MongoDB, Mongoose, TypeScript',
        screenshot: streetTrendCardSm
    },
    {
        id: 5,
        title: 'Сайт охранной фирмы',
        projectName: 'Охранное предприятие «Партнер»',
        projectLogo: partnerIcon,
        description: 'Привлекательный, информативный веб-сайт охранного предприятия, который представляет их компетенции и услуги, а также обеспечивает удобный способ связи для клиентов.',
        stack: 'Next.js, CSS Modules, Nodemailer, TypeScript',
        screenshot: partnerCardSm
    },
    {
        id: 6,
        title: 'Платформа аренды жилья',
        projectName: 'Бережок',
        projectLogo: berezhokIcon,
        description: 'Веб-приложение, предоставляющее широкий выбор жилых объектов для аренды и удобные инструменты поиска, помогающие пользователям быстро найти и забронировать подходящее жилье.',
        stack: 'Next.js, Redux Toolkit, Sass, MongoDB, Prisma, Nodemailer, TypeScript',
        screenshot: berezhokCardSm
    },
    {
        id: 7,
        title: 'Современное портфолио',
        projectName: 'Alfred18.ru',
        projectLogo: portfolioIcon,
        description: 'Гибридное веб-приложение, объединяющее имитацию работы Windows 98, личную страницу и портфолио.',
        stack: 'React, Redux Toolkit, Styled components, TypeScript',
        screenshot: portfolioCardSm
    },
    {
        id: 8,
        title: 'Интернет-магазин',
        projectName: 'ProdShop',
        projectLogo: prodServiceIcon,
        description: 'Современный и функциональный веб-сайт электронной коммерции для компании Продсервис, предоставляющий региональному филиалу полноценный интернет-магазин и возможность эффективных онлайн-продаж.',
        stack: 'React, Redux Toolkit, Tailwind CSS, Framer Motion, TypeScript, Node.js, Express, MySQL, Sequelize, Nodemailer',
        screenshot: prodServiceCardSm
    }
];