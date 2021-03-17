import React from 'react';
import Styles from './home-styles.scss';
import Loader from '@/presentation/components/loader/loader';

const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles.list}>
        <h2>HOME</h2>
      </div>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Home;
