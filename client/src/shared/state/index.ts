import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './window/slice';
import systemReducer from './system/slice';

/**
 The Redux store object created using the configureStore function from the @reduxjs/toolkit library.
 @typedef {Object} Store
 */
export const store = configureStore({
    reducer: {
        window: windowReducer,
        system: systemReducer
    },
    devTools: true
});

/**
 The root state type of the Redux store, obtained by calling the getState function on the Redux store object.
 @typedef {Object} RootState
 */
export type RootState = ReturnType<typeof store.getState>

/**
 The type of the dispatch function obtained from the Redux store object.
 @typedef {Function} AppDispatch
 */

/**
 An object that provides access to the dispatch function and the RootState of the Redux store.
 @typedef {Object} ThunkApi
 @property {AppDispatch} dispatch - The dispatch function of the Redux store.
 @property {RootState} state - The root state of the Redux store.
 */
export type AppDispatch = typeof store.dispatch

export interface ThunkApi {
    dispatch: AppDispatch;
    state: RootState;
}

export default store;