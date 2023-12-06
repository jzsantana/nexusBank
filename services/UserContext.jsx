import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const login = (cpf, password) => {
    const user = { cpf, password };
    setUserData(user);
};

  return (
    <UserContext.Provider value={{ userData, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};