import { useContext } from 'react';
import { rootContext } from 'state';

export const useRootState = () => useContext(rootContext).state;