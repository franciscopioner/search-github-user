import React from 'react';
import Styles from './home-styles.scss';
import AxiosHttpClient from '../../../domain/infra/http/axios-http-client';

const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles.list}>
        <h2>HOME</h2>
        <AxiosHttpClient />
      </div>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Home;
