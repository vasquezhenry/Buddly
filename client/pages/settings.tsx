import { Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import AppLayout from '../common/components/layout/Layout';

export default function Settings() {
  return (
    <AppLayout>
      <Head>
        <title>Settings - Buddly</title>
      </Head>
      <Heading>Settings</Heading>
    </AppLayout>
  );
}
