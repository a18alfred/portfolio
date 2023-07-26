import React from 'react';
import * as Styled from './WelcomePage.styles';
import getIconByName from '../../config/osIcons';

/**
 *Renders Welcome Page
 *@function WelcomePage
 *@returns {JSX.Element} Welcome Page
 */
const WelcomePage = () => {
    return (
        <>
            <Styled.Container>
                <Styled.Header>
                    <h1>Альфред Мирзасалихов</h1>
                    <h2>Full-stack Разработчик</h2>
                </Styled.Header>
                <Styled.Paragraph>
                    Добро пожаловать на мой сайт в стиле Windows 98! Именно с этой системы я начал своё увлечение
                    компьютерами и программированием в школе.
                </Styled.Paragraph>
                <Styled.Paragraph>
                    Здесь вы можете ознакомиться с моими проектами и резюме, узнать больше обо мне и моем опыте работы.
                    Кроме того, вы можете сыграть в DOOM и послушать несколько моих песен в Winamp.
                </Styled.Paragraph>
                <Styled.Paragraph>
                    Если у вас есть вопросы или предложения, вы можете отправить мне сообщение в VK или
                    в Telegram.
                </Styled.Paragraph>
                <Styled.ContactWrapper>
                    <a href='https://vk.com/a18alfred' target='_blank' rel='noreferrer'>
                        <Styled.IconImg
                            alt={'vkIcon'}
                            src={getIconByName('vkIcon') as unknown as string}
                        />
                    </a>
                    <a href='https://t.me/a18alfred' target='_blank' rel='noreferrer'>
                        <Styled.IconImg
                            alt={'telegramIcon'}
                            src={getIconByName('telegramIcon') as unknown as string}
                        />
                    </a>
                </Styled.ContactWrapper>
                <Styled.Paragraph>
                    Спасибо за визит, я надеюсь на наше дальнейшее знакомство!
                </Styled.Paragraph>
                <br />
            </Styled.Container>
        </>
    );
};

export default WelcomePage;
