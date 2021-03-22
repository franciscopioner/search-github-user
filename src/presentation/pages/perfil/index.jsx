import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { useSearch } from '../../../domain/usecases/search-user';

const Perfil = () => {
  const { user } = useSearch();
  const userPerfil = `https://github.com/${user}`;
  return (
    <IframeResizer
      log
      src={userPerfil}
      style={{ width: '1px', minWidth: '100%' }}
    />
  );
};

export default Perfil;
