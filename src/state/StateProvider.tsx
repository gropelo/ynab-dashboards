import React, { useReducer } from 'react'
import { rootReducer, initialState, rootContext } from './rootstate';

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export const StateProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <rootContext.Provider value={{ state, dispatch }}>
      {children}
    </rootContext.Provider>
  )
}