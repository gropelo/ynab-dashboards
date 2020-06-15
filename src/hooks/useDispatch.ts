import { useContext } from 'react'
import { rootContext } from 'state';

export const useDispatch = () => useContext(rootContext).dispatch;