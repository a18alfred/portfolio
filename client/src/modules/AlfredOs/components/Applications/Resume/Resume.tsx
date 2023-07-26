import React from 'react';
import useInitialWindowSize from '../../../hooks/useInitialWindowSize';
import Window from '../../Window/Window';
import PdfViewer from '../../PdfViewer/PdfViewer';
import { TITLE_FULL_NAME } from '../../../../../shared/config/global';

export interface ResumeProps extends WindowAppProps {
}

/**
 A React functional component representing a resume window that displays a PDF resume.
 @param {Object} props - The props object containing the app key for the window.
 @param {string} props.appKey - The unique key for the app window.
 @returns {JSX.Element} - A JSX Element representing the resume window.
 */
const Resume: React.FC<ResumeProps> = ({ appKey }) => {
    const { initWidth, initHeight, initTop, initLeft } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={initTop}
            left={initLeft}
            width={initWidth}
            height={initHeight}
            windowBarIcon='resumeIcon'
            windowTitle='Резюме'
            appKey={appKey}
            bottomLeftText={`© ${new Date().getFullYear()} ${TITLE_FULL_NAME}. Все права защищены.`}
        >
            <PdfViewer />
        </Window>
    );
};

export default Resume;
