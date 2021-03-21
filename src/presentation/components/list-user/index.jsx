import React from 'react';
import { useSearch } from '../../../domain/usecases/search-user';
import axios from '../../../domain/infra/http/axios-http-client';
import InputSearch from '../input-search';
import Loader from '../loader';
import Styles from './list-user-styles.scss';

const ListUser = () => {
  const {
    setUser,
    error,
    userInfos,
    setUserInfos,
    setError,
    setIsLoading,
    isLoading,
    setShowRepositorys,
    setRepositorys,
    showUserInfos,
    setShowUserInfos,
  } = useSearch();

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (e, user) => {
    e.preventDefault();
    setIsLoading(true);
    setRepositorys([]);
    axios
      .get(user)
      .then((resp) => {
        setError('');
        setUserInfos(resp.data);
        console.log(resp.data);
        setShowUserInfos(true);
      })
      .catch((error) => {
        setError(error.message);
        setUserInfos({});
        setShowUserInfos(false);
      })
      .finally(() => {
        setIsLoading(false);
        setShowRepositorys(false);
      });
  };

  const result = (
    <div className={Styles.result}>
      <h1>Nome: {userInfos.name}</h1>
      <a
        onClick={() => {
          setShowRepositorys(true);
        }}
      >
        {userInfos.public_repos} Repositórios
      </a>
    </div>
  );

  return (
    <>
      <InputSearch onchange={handleChange} onsubmit={handleSubmit} />
      {!showUserInfos ? null : result}
      {error}
    </>
  );
};

export default ListUser;
