import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { cookieLoad, decodeToken } from '../cookie';

const StateContext = createContext();

// Add intial state of store
const initialState = {
  isLogin: false,
  role: '',
  personId: '',
  corporateId: '',
  alert: {
    severity: 'success',
    isOpen: false,
    label: 'Success'
  }
};

if (decodeToken(cookieLoad())) {
  const { role, _id, corporateId } = decodeToken(cookieLoad());
  initialState.isLogin = true;
  initialState.role = role;
  initialState.personId = _id;
  initialState.corporateId = corporateId;
}

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
