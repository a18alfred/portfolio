import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defaultTheme } from './shared/theme/variables';
import store from './shared/state';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './modules/Portfolio';

const app = document.getElementById('root');
if (!app) throw new Error('Failed to find the root element');
const root = createRoot(app);

root.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <HelmetProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/portfolio/*' element={<Portfolio />} />
                        <Route path='*' element={<Navigate to={'/'} />} />
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ThemeProvider>
    </Provider>
);
