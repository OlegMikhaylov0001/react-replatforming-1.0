import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './index';

export const UseAppDispatch = useDispatch<AppDispatch>;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
