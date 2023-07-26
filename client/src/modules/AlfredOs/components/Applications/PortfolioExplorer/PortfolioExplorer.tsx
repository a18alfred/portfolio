import React from 'react';
import Window from '../../Window/Window';
import useInitialWindowSize from '../../../hooks/useInitialWindowSize';
import { TITLE_FULL_NAME } from '../../../../../shared/config/global';

export interface PortfolioExplorerProps extends WindowAppProps {
}

/**
 * PortfolioExplorer component displays a window containing the portfolio website.
 * @param {PortfolioExplorerProps} props - The props object containing the appKey.
 * @returns {JSX.Element} - Returns the JSX elements containing the window with the portfolio website.
 */
const PortfolioExplorer: React.FC<PortfolioExplorerProps> = (props) => {
    const { initWidth, initHeight, initTop, initLeft } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={initTop}
            left={initLeft}
            width={initWidth}
            height={initHeight}
            windowTitle='Альфред Мирзасалихов - Портфолио 2023'
            windowBarIcon='portfolioIcon'
            appKey={props.appKey}
            bottomLeftText={`© ${new Date().getFullYear()} ${TITLE_FULL_NAME}. Все права защищены.`}
        >
            <div className='site-page'>
                <iframe
                    id={`frame-${props.appKey}`}
                    src={`${process.env.PUBLIC_URL}/portfolio?isIFrame=true`}
                    title='Альфред Мирзасалихов - Портфолио 2023'
                    width='100%'
                    height='100%'
                />
            </div>
        </Window>
    );
};

export default PortfolioExplorer;
