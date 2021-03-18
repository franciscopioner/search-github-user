import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Search = () => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Axios.get('https://api.github.com/users/franciscopioner')
      .then((resp) => {
        setProject(resp.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Buscando dados...</h1>;
  }

  if (error) {
    return <h1>Deu erro!</h1>;
  }

  return (
    <>
      <h1>Nome: {project.nome}</h1>
      <h1>Id: {project.id}</h1>
      <h1>Nome_Id: {project.node_id}</h1>
    </>
  );
};

export default Search;
