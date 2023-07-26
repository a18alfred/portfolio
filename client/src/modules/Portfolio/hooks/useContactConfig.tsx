import React, { ReactNode } from 'react';
import { FaGithub, FaDiscord, FaVk, FaTelegram } from 'react-icons/fa';

export interface MyContact {
    id: number;
    icon: ReactNode;
    text: string;
    href: string;
}

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {MyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useContactConfig = (): { myContacts: MyContact[] } => {
    const myContacts: MyContact[] = [
        {
            id: 1,
            icon: <FaTelegram className={'contact-icon'} />,
            text: 'Telegram',
            href: 'https://t.me/a18alfred'
        },
        {
            id: 2,
            icon: <FaVk className={'contact-icon'} />,
            text: 'VK',
            href: 'https://vk.com/a18alfred'
        },
        {
            id: 3,
            icon: <FaDiscord className={'contact-icon'} />,
            text: 'Discord',
            href: 'https://discord.gg/EE2vp7KG'
        },
        {
            id: 4,
            icon: <FaGithub className={'contact-icon'} />,
            text: 'Github',
            href: 'https://github.com/a18alfred?tab=repositories'
        }
    ];

    return { myContacts };
};