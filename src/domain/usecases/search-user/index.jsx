import React, { createContext, useState, useContext } from 'react';

export const SearchUserContext = createContext();

export default function ActionsProvider({ children }) {
  const [userInfos, setUserInfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState('');
  const [showRepositorys, setShowRepositorys] = useState(false);
  const [repositorys, setRepositorys] = useState([]);

  return (
    <SearchUserContext.Provider
      value={{
        userInfos,
        setUserInfos,
        isLoading,
        setIsLoading,
        error,
        setError,
        user,
        setUser,
        showRepositorys,
        setShowRepositorys,
        repositorys,
        setRepositorys,
      }}
    >
      {children}
    </SearchUserContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchUserContext);

  const { userInfos, setUserInfos } = context;
  const { isLoading, setIsLoading } = context;
  const { error, setError } = context;
  const { user, setUser } = context;
  const { showRepositorys, setShowRepositorys } = context;
  const { repositorys, setRepositorys } = context;

  return {
    userInfos,
    setUserInfos,
    isLoading,
    setIsLoading,
    error,
    setError,
    user,
    setUser,
    showRepositorys,
    setShowRepositorys,
    repositorys,
    setRepositorys,
  };
}
