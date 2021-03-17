import React from 'react';
import Styles from './header-styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.menu}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
