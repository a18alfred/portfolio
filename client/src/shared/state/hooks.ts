import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

/**
 A custom hook that returns the useDispatch function with AppDispatch type.
 @returns {AppDispatch} The AppDispatch function returned from useDispatch.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 A typed version of useSelector that takes RootState as the generic type.
 @returns {RootState} The RootState returned from useSelector.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;