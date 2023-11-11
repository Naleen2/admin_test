import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from './store.ts';

type DispatchFunction = () => AppDispatch;

export const useProductDispatch: DispatchFunction = useDispatch;
export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector;
