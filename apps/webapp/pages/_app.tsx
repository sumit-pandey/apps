import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SharedUi } from '@twimbit/shared/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      hello
      <SharedUi />
    </>
  );
}

export default CustomApp;
