import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { SharedUi } from '@twimbit/shared/ui';
import { SharedFeature } from '@twimbit/shared/feature';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      hello2
      <SharedUi />
      <SharedFeature />
    </>
  );
}

export default CustomApp;
