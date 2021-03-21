import React from 'react';
import { useSearch } from '../../../domain/usecases/search-user';
import axios from '../../../domain/infra/http/axios-http-client';
import InputSearch from '../inputSearch';
import Loader from '../loader';

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
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const result = (
    <div>
      <h1>{userInfos.name}</h1>
      <a
        onClick={() => {
          setShowRepositorys(true);
        }}
      >
        {userInfos.public_repos} Rapositórios
      </a>
    </div>
  );

  return (
    <>
      <InputSearch onchange={handleChange} onsubmit={handleSubmit} />
      {error}
      {isLoading ? <Loader /> : result}
    </>
  );
};

export default ListUser;
