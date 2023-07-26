/**
 * @exports Navigation Menu Configuration
 * @const navMenuLinks - array of objects to be mapped into the list of router links in portfolio screens
 * */
export const navMenuLinks: { id: number; linkText: string; href: string, onlyDesktop?: boolean, newTab?: boolean }[] = [
    { id: 1, href: '/portfolio/about', linkText: 'Обо мне' },
    { id: 2, href: '/portfolio/projects', linkText: 'Мои работы' },
    { id: 3, href: '/portfolio/contact', linkText: 'Связаться со мной' },
    { id: 4, href: `${process.env.PUBLIC_URL}/assets/docs/resume.pdf`, linkText: 'Моё резюме', newTab: true },
    { id: 5, href: '/', linkText: 'Рабочий стол', onlyDesktop: true }
];
