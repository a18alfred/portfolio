import React from 'react';
import * as Styled from './Description.styles';
import AnimatedTextHeader from '../../../../typography/AnimatedTextHeader/AnimatedTextHeader';
import AnimatedTextParagraph from '../../../../typography/AnimatedTextParagraph/AnimatedTextParagraph';
import { bio } from '../../../../config/portfolioBio';
import AnimatedImage from '../../../AnimatedImage/AnimatedImage';

/**
 Renders the description part of about page.
 @function
 @returns {JSX.Element} - Description JSX
 */
const Description = () => {
    return (
        <Styled.Container id={'description'} data-testid='description'>
            <AnimatedTextHeader
                size={'small'}
                margin={'0'}
                animationDuration={0.5}
            >
                Обо мне </AnimatedTextHeader>
            <Styled.Wrapper>
                <Styled.InfoWrapper>
                    {bio.map((text, index) => (
                        <AnimatedTextParagraph
                            key={index}
                            margin={'0'}
                            withDarkColor={true}
                            size={'large'}
                            animationDuration={0.5}
                            paragraphText={text}
                        />
                    ))}
                </Styled.InfoWrapper>
                <Styled.ImageWrapper>
                    <AnimatedImage
                        src={`${process.env.PUBLIC_URL}/assets/portfolio/photo.webp`}
                        alt={'Фотография'}
                        animationDuration={0.5}
                    />
                </Styled.ImageWrapper>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Description;
