import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

/**
 * A React functional component that renders a PDF viewer using `react-pdf`.
 * @function
 * @returns {JSX.Element} A React JSX element representing the PDF viewer.
 */
const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const urlWorker = `${process.env.PUBLIC_URL}/assets/pdf-worker/pdf.worker.min.js`;
    const urlResume = `${process.env.PUBLIC_URL}/assets/docs/resume.pdf`;
    return (
        <Worker workerUrl={urlWorker}>
            <Viewer fileUrl={urlResume}
                    plugins={[defaultLayoutPluginInstance]}
            />
        </Worker>
    );
};

export default PdfViewer;
