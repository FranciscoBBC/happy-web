import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg';

const Home = () => {
  return (
    <div>
      <Head>
        <title>happy</title>
      </Head>
      <main>
        <h1>oi</h1>
        <Logo />
      </main>
    </div>
  );
};

export default Home;
