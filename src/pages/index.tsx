import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  Main,
  ContentWrapper,
  Text,
  Title,
  Location,
  EnterApp
} from '@styles/home';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../assets/images/logo.svg';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>happy</title>
      </Head>
      <Main>
        <ContentWrapper>
          <Logo />
          <div>
            <Title>Leve felicidade para o mundo</Title>
            <Text>Visite orfanatos e mude o dia de muitas crianças.</Text>
          </div>
          <Location>
            <strong>Rio de Janeiro</strong>
            <span>RJ</span>
          </Location>
          <EnterApp onClick={() => router.push('/localizacao-orfanatos')}>
            <FaArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </EnterApp>
        </ContentWrapper>
      </Main>
    </>
  );
};

export default Home;
