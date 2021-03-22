import React, { useEffect, useRef } from 'react';
import axios from '../../../domain/infra/http/axios-http-client';
import { useSearch } from '../../../domain/usecases/search-user';
import Styles from './list-repositorys.scss';

const ListRepositorys = () => {
  const { showRepositorys, user, repositorys, setRepositorys } = useSearch();

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
      .finally(() => {});
  }, [showRepositorys]);

  const result = (
    <div className={Styles.result}>
      <h2>Lista de repositórios</h2>
      <ul>
        {repositorys.map((pObj) => (
          <li key={pObj.id}>{pObj.name}</li>
        ))}
      </ul>
    </div>
  );

  return <>{!showRepositorys ? null : result}</>;
};

export default ListRepositorys;
