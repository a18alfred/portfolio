import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { mockReduxStore } from './mockReduxStore';
import windowReducer from '../shared/state/window/slice';
import systemReducer from '../shared/state/system/slice';
import { RootState } from '../shared/state';
import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { defaultTheme } from '../shared/theme/variables';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';


/**
 * Create a testing store
 *@param {object} initialState - Initial store state
 *@function storeFactory
 *@returns {Store} - Redux store
 */
export const storeFactory = (
    initialState: RootState
): Store<RootState, AnyAction> => {
    const middlewares = [thunk];
    return configureStore({
        reducer: {
            window: windowReducer,
            system: systemReducer
        },
        preloadedState: initialState,
        middleware: middlewares
    });
};

/**
 * Create a wrapper for tested modules  with initial state and styled-modules theme props
 *@param {JSX.Element} component - tested component
 *@function withReduxAndStyledProviders
 *@returns {JSX.Element} - tested element wrapped in redux and styled modules providers
 */
export const withReduxAndStyledProviders = (
    component: JSX.Element, mockState?: RootState
): JSX.Element => {
    const store = storeFactory(mockState ? mockState : mockReduxStore);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <HelmetProvider>
                    <BrowserRouter>
                        {component}
                    </BrowserRouter>
                </HelmetProvider>
            </Provider>
        </ThemeProvider>
    );
};
