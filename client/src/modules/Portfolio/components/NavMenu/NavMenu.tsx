import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './NavMenu.styles';
import SocialMediaContact from '../SocialMediaContact/SocialMediaContact';
import { isNode } from '../../../../shared/utils/general';
import { navMenuLinks } from '../../config/portfolioNavMenu';
import { useContactConfig } from '../../hooks/useContactConfig';
import { useMediaQuery } from '@react-hook/media-query';
import { isMobile } from 'mobile-device-detect';
import { useAppSelector } from '../../../../shared/state/hooks';
import { selectSystemIsIframe } from '../../../../shared/state/system/slice';
import { MIN_OS_WIDTH_QUERY } from '../../../../shared/config/global';

/**
 *Renders NavigationMenu component for routing and external navigation in portfolio screens
 *@function NavigationMenu
 *@returns {JSX.Element}
 */
const NavMenu = (): JSX.Element => {
    const navRef = useRef<HTMLButtonElement>(null);
    const { myContacts } = useContactConfig();
    const [isActive, setIsActive] = useState(false);
    const toggleNavMenu = () => setIsActive((prev) => !prev);
    const reRenderKey = `${Math.random() * 500}${isActive}`;
    const reRenderKeyTwo = `${Math.random() * 100}${isActive}`;
    const isIFrame = useAppSelector(selectSystemIsIframe);
    const smallScreen = useMediaQuery(MIN_OS_WIDTH_QUERY);
    const desktopOptCancel = (isMobile || smallScreen || isIFrame);

    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent) => {
            if (target && isNode(target))
                if (navRef.current && !navRef.current.contains(target)) {
                    setIsActive(false);
                }
        };

        function handleScroll() {
            setIsActive(false);
        }

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('scroll', handleScroll);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navRef, isActive]);

    return (
        <Styled.Container
            data-testid='nav-menu-container'
            ref={navRef}
            onClick={toggleNavMenu}
        >
            <div
                data-testid='nav-menu-hamburger'
                className={`icon-one ${isActive && 'active-one'}`}
            >
                <div className='hamburger hamburger-one' />
            </div>

            <Styled.Menu isOpen={isActive}>
                <Styled.RouterLinksList className={'router-list'} key={reRenderKey}>
                    {navMenuLinks.map((link) => {
                        if (link.onlyDesktop && desktopOptCancel) return null;
                        return (
                            <li key={link.id}>
                                <Styled.NavLink
                                    to={link.href}
                                    target={link.newTab ? '_blank' : '_self'}
                                >{link.linkText}
                                </Styled.NavLink>
                            </li>
                        );
                    })}
                </Styled.RouterLinksList>

                <Styled.SocialMediaWrapper
                    className={'social-media'}
                    key={reRenderKeyTwo}
                >
                    <Styled.SocialMediaContactsList>
                        {myContacts.map((contact) => (
                            <li key={contact.id}>
                                <SocialMediaContact
                                    icon={contact.icon}
                                    href={contact.href}
                                    size='standard'
                                />
                            </li>
                        ))}
                    </Styled.SocialMediaContactsList>
                </Styled.SocialMediaWrapper>
            </Styled.Menu>
        </Styled.Container>
    );
};

export default NavMenu;
