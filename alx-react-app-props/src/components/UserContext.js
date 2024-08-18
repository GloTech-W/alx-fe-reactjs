// src/UserContext.js
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserContext;
