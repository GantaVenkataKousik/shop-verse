import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialUser = JSON.parse(localStorage.getItem('user')) || null;

const UserContext = createContext();

const userActions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

function userReducer(state, action) {
  switch (action.type) {
    case userActions.LOGIN:
      localStorage.setItem('user', JSON.stringify(action.user));
      return action.user;
    case userActions.LOGOUT:
      localStorage.removeItem('user');
      return null;
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, initialUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
