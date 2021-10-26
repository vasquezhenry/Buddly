import { SimpleGrid, Box, Image, Heading, Center, Text, Stack, Spacer } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import AuthForm from '../common/components/auth/AuthForm';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - Buddly</title>
      </Head>

      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <Box>
          <AuthForm />
        </Box>
        <Box
          height="100vh"
          bg="background: #3F1A0A;background: -webkit-linear-gradient(top left, #3F1A0A, #0B0A0A);background: -moz-linear-gradient(top left, #3F1A0A, #0B0A0A);background: linear-gradient(to bottom right, #3F1A0A, #0B0A0A);"
        >
          <Center marginTop={20}>
            <Image src="/login2.svg" boxSize="500" />
          </Center>
          <Box>
            <Heading textAlign="center" size="lg" color="white">
              Recruiting Group Members
            </Heading>
            <Heading textAlign="center" size="lg" color="rowanYellow">
              Made Easy.
            </Heading>
            <Box>
              <Text as="p" color="white" textAlign="center" fontSize="10px">
                No more awkward conversions and no more excuses
              </Text>
              <Text as="p" color="white" textAlign="center" fontWeight="bold" fontSize="10px">
                just collaborate.
              </Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
}
