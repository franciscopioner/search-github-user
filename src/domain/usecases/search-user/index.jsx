import React, { createContext, useState, useContext } from 'react';

export const SearchUserContext = createContext();

export default function ActionsProvider({ children }) {
  const [userInfos, setUserInfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState('');
  const [repositorys, setRepositorys] = useState([]);

  const [showUserInfos, setShowUserInfos] = useState(false);
  const [showRepositorys, setShowRepositorys] = useState(false);

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
        repositorys,
        setRepositorys,
        showUserInfos,
        setShowUserInfos,
        showRepositorys,
        setShowRepositorys,
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
  const { repositorys, setRepositorys } = context;

  const { showUserInfos, setShowUserInfos } = context;
  const { showRepositorys, setShowRepositorys } = context;

  return {
    userInfos,
    setUserInfos,
    isLoading,
    setIsLoading,
    error,
    setError,
    user,
    setUser,
    repositorys,
    setRepositorys,
    showUserInfos,
    setShowUserInfos,
    showRepositorys,
    setShowRepositorys,
  };
}
