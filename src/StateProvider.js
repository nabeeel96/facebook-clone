import React, { createContext, useContext, useReducer } from 'react';

export const StateContexxt = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContexxt.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContexxt.Provider>
);

export const useStateValue = () => useContext(StateContexxt);
