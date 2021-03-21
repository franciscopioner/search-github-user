import React from 'react';
import { useSearch } from '../../../domain/usecases/search-user';
import Styles from './input-search.scss';

const InputSearch = ({ onchange, onsubmit }) => {
  const { user } = useSearch();
  return (
    <>
      <form className={Styles.formSearch} onSubmit={(e) => onsubmit(e, user)}>
        <h2>Busca de usuários GitHub</h2>
        <label>
          Name:
          <input type="text" onChange={(e) => onchange(e)} />
        </label>
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
};

export default InputSearch;
