import React, { useEffect, useState, useRef } from 'react';
import axios from '../../../domain/infra/http/axios-http-client';
import { useSearch } from '../../../domain/usecases/search-user';

const ListRepositorys = () => {
  const {
    setShowRepositorys,
    showRepositorys,
    user,
    repositorys,
    setRepositorys,
  } = useSearch();

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios
      .get(`${user}/repos`)
      .then((resp) => {
        setRepositorys(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setShowRepositorys(false);
      });
  }, [showRepositorys]);

  return (
    <div>
      <ul>
        {repositorys.map((pObj) => (
          <li key={pObj.id}>{pObj.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRepositorys;
