import Desktop from './components/Desktop/Desktop';
import { GlobalStylesOS } from '../../shared/theme/globalStyles';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  image-rendering: pixelated;
  overflow: hidden;
`;

/**
 Renders the AlfredOs desktop and sets the page title.
 @returns {JSX.Element} The AlfredOs component.
 */
const AlfredOs: React.FC = React.memo(() => {
    return (
        <>
            <GlobalStylesOS />
            <Container>
                <Desktop />
            </Container>
            <Helmet>
                <title>AlfredOS 98</title>
            </Helmet>
        </>
    );
});

export default AlfredOs;
