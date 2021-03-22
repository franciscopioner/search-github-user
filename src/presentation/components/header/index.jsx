import React from 'react';
import Styles from './header-styles.scss';
import { Link } from 'react-router-dom';
import { useSearch } from '../../../domain/usecases/search-user';

const Header = () => {
  const { showUserInfos } = useSearch();
  const menuPerfil = (
    <li>
      <Link to="/perfil">Perfil</Link>
    </li>
  );
  return (
    <header className={Styles.header}>
      <div className={Styles.menu}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!showUserInfos ? null : menuPerfil}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
