import React from 'react';
import * as Styled from './PortfolioLanding.styles';
import AnimatedRouterLink from '../AnimatedRouterLink/AnimatedRouterLink';

/**
 *Renders portfolio landing page
 *@function PortfolioLanding
 *@returns {JSX.Element} - Rendered PortfolioLanding component
 */
const PortfolioLanding: React.FC = React.memo(() => {
    return (
        <Styled.Container data-testid='portfolio-landing'>
            <Styled.Navigation>
                <Styled.LinkWrapper>
                    <AnimatedRouterLink
                        variant={'standard'}
                        text={'Обо мне'}
                        to={'/portfolio/about'}
                        animationTimeout={300}
                    />
                    <AnimatedRouterLink
                        variant={'standard'}
                        text={'Работы'}
                        to={'/portfolio/projects'}
                        animationTimeout={600}
                    />
                    <AnimatedRouterLink
                        variant={'highlight'}
                        text={'Контакты'}
                        to={'/portfolio/contact'}
                        animationTimeout={900}
                    />
                </Styled.LinkWrapper>
            </Styled.Navigation>
            <Styled.Photo photo={`${process.env.PUBLIC_URL}/assets/portfolio/processed-photo.webp`} />
        </Styled.Container>
    );
});

export default PortfolioLanding;
