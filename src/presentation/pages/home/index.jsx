import React from 'react';
import Styles from './home-styles.scss';
import ListUser from '../../components/list-user';
import ListRepositorys from '../../components/list-ropositorys';

const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles.list}>
        <ListUser />
      </div>
      <div>
        <ListRepositorys />
      </div>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Home;
