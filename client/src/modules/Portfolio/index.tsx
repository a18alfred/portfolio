import { GlobalStylesPortfolio } from '../../shared/theme/globalStyles';
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { LOADING_INTRO_DURATION, TITLE_FULL_NAME } from '../../shared/config/global';
import Loader from './components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../shared/state/hooks';
import { intro_loaded, selectSystemToShowIntro } from '../../shared/state/system/slice';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortfolioLanding from './components/PortfolioLanding/PortfolioLanding';
import { useQuery } from './hooks/useQuery';
import PortfolioLayout from './components/PortfolioLayout/PortfolioLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

/**
 Renders the main Portfolio page, including a Loader component and Helmet component for setting the document title.
 @returns {JSX.Element} The JSX element for the Portfolio page.
 */
const Portfolio: React.FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const toShowIntro = useAppSelector(selectSystemToShowIntro);
    const query = useQuery();
    const isIFrame = !!query?.get('isIFrame');

    useEffect(() => {
        setTimeout(() => {
            dispatch(intro_loaded({ isIFrame }));
        }, LOADING_INTRO_DURATION);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <GlobalStylesPortfolio />
            <Helmet>
                <title>{`Full-Stack Разработчик | ${TITLE_FULL_NAME} |`}</title>
            </Helmet>
            {
                toShowIntro
                    ? <Loader isOnScreen={toShowIntro} loadingDuration={LOADING_INTRO_DURATION} />
                    : <Routes>
                        <Route path='/' element={<PortfolioLanding />} />
                        <Route path='/*' element={<PortfolioLayout />}>
                            <Route path='about' element={<About />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='projects' element={<Projects />} />
                            <Route path='projects/:projectId' element={<ProjectDetails />} />
                            <Route path='*' element={<Navigate to={'/portfolio'} />} />
                        </Route>
                    </Routes>
            }
            <ScrollToTop />
        </>
    );
});

export default Portfolio;
