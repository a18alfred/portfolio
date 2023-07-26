import React from 'react';
import Message from './Slides/Message/Message';
import { Helmet } from 'react-helmet-async';
import { TITLE_FULL_NAME } from '../../../../shared/config/global';
import TextHero from '../TextHero/TextHero';

/**
 * Contact functional component.
 * Renders a contact page.
 * @returns {JSX.Element} Contact component JSX.Element.
 */
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>{`Контакты | ${TITLE_FULL_NAME}`}</title>
            </Helmet>
            <TextHero
                subtitle='Создайте сильную команду и добейтесь успеха.'
            >
                <span className={'text-gradient'}>Команда</span>{' '}
                <span> - ключ к успеху</span>
            </TextHero>
            <Message />
        </>
    );
};

export default Contact;
