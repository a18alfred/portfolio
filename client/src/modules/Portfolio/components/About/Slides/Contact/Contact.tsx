import React, { MouseEvent } from 'react';
import * as Styled from './Contact.styles';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import { useNavigate } from 'react-router-dom';
import ToTopButton from '../../../ToTopButton/ToTopButton';
import AnimationSlide from '../../../AnimationSlide/AnimationSlide';

/**
 * Contact functional component.
 * Renders a contact part of about page
 * @returns {JSX.Element} Contact component JSX.Element.
 */
const Contact: React.FC = () => {
    const navigate = useNavigate();

    const contactHandler = (e: MouseEvent) => {
        e.preventDefault();
        navigate('/portfolio/contact');
    };
    return (
        <Styled.Container id={'contact'}>
            <Styled.Wrapper>
                <AnimatedTextHeader
                    size={'medium'}
                    margin={'5rem 0 4px 0'}
                    animationDuration={0.5}
                >
                    Давайте работать вместе
                </AnimatedTextHeader>
                <AnimatedTextParagraph
                    margin={'0.5rem 0'}
                    withDarkColor={true}
                    size={'large'}
                    animationDuration={0.5}
                >
                    a18alfred@yandex.ru
                </AnimatedTextParagraph>
                <AnimationSlide>
                    <Styled.ContactBtn
                        onClick={contactHandler}
                    >
                        Связаться
                    </Styled.ContactBtn>
                </AnimationSlide>
                <ToTopButton />
            </Styled.Wrapper>

        </Styled.Container>
    );
};

export default Contact;
