import React from 'react';
import Styles from './home-styles.scss';
import ListUser from '../../components/list-user';
import ListRepositorys from '../../components/list-ropositorys';

const Home = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.listUser}>
        <ListUser />
      </div>
      <div className={Styles.listRepositorys}>
        <ListRepositorys />
      </div>
    </section>
  );
};

export default Home;
