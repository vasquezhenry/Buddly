import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { HiPencilAlt } from 'react-icons/hi';
import React from 'react';
import AppLayout from '../common/components/layout/Layout';
import Head from 'next/head';

export default function Profile() {
  return (
    <AppLayout>
      <Head>Profile - Buddly</Head>
      <Box as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
        <Box
          maxW="3xl"
          mx="auto"
          Box
          bg={useColorModeValue('white', 'gray.700')}
          rounded={{ md: 'lg' }}
          shadow="base"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between" px="6" py="4" borderBottomWidth="1px">
            <Heading fontSize="lg">Account Info</Heading>
            <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
              Edit
            </Button>
          </Flex>
          <Box>
            <Flex
              as="dl"
              direction={{ base: 'column', sm: 'row' }}
              px="6"
              py="4"
              _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
            >
              <Box as="dt" minWidth="180px">
                Name
              </Box>
              <Box as="dd" flex="1" fontWeight="semibold">
                Henry Vasquez
              </Box>
            </Flex>
            <Flex
              as="dl"
              direction={{ base: 'column', sm: 'row' }}
              px="6"
              py="4"
              _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
            >
              <Box as="dt" minWidth="180px">
                Email
              </Box>
              <Box as="dd" flex="1" fontWeight="semibold">
                vasque16@students.rowan.edu
              </Box>
            </Flex>
            <Flex
              as="dl"
              direction={{ base: 'column', sm: 'row' }}
              px="6"
              py="4"
              _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
            >
              <Box as="dt" minWidth="180px">
                Account Type
              </Box>
              <Box as="dd" flex="1" fontWeight="semibold">
                Student
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
