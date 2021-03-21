import React from 'react';
import { useSearch } from '../../../domain/usecases/search-user';

const InputSearch = ({ onchange, onsubmit }) => {
  const { user } = useSearch();
  return (
    <>
      <form onSubmit={(e) => onsubmit(e, user)}>
        <label>
          Name:
          <input type="text" onChange={(e) => onchange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default InputSearch;
