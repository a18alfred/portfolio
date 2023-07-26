import React from 'react';
import * as Styled from './Message.styles';
import ContactForm from '../../../ContactForm/ContactForm';
import { useContactConfig } from '../../../../hooks/useContactConfig';
import SocialMediaContact from '../../../SocialMediaContact/SocialMediaContact';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';

/**
 A functional component that renders the second slide of the contact page.
 The component displays a form to send a message and a list of social media contacts.
 @returns {JSX.Element} Message component JSX.Element.
 */
const Message: React.FC = () => {
    const { myContacts } = useContactConfig();
    return (
        <Styled.Container data-testid='message-component'>
            <Styled.ColumnWrapper>
                <Styled.LeftColumn>
                    <AnimatedTextHeader
                        size='small'
                        margin='5rem 0 1rem 0'
                        animationDuration={0.5}
                    >
                        Отправьте мне сообщение!
                    </AnimatedTextHeader>
                    <AnimatedTextParagraph
                        margin='0 0 4rem 0'
                        withDarkColor={true}
                        size='large'
                        animationDuration={0.5}
                    >
                        У вас есть вопрос или предложение, или вы просто хотите поздороваться? Обращайтесь.
                    </AnimatedTextParagraph>
                    <ContactForm />
                </Styled.LeftColumn>
                <Styled.RightColumn>
                    {myContacts.map((contact) => (
                        <li key={contact.id}>
                            <SocialMediaContact
                                icon={contact.icon}
                                href={contact.href}
                                size='large'
                            />
                        </li>
                    ))}
                </Styled.RightColumn>
            </Styled.ColumnWrapper>
        </Styled.Container>
    );
};

export default Message;
