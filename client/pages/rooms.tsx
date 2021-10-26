import { Box, Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import AppLayout from '../common/components/layout/Layout';
import RoomCard from '../common/components/RoomCard';

export default function Rooms() {
  return (
    <AppLayout>
      <Head>
        <title>Rooms - Buddly</title>
      </Head>
      <Heading>Rooms</Heading>
      <RoomCard />
    </AppLayout>
  );
}
