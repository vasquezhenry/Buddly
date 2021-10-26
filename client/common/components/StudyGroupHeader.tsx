import { Flex, Box, Heading, Spacer, Link } from '@chakra-ui/layout';
import { useColorModeValue, chakra } from '@chakra-ui/system';
import { Image } from '@chakra-ui/react';
import React from 'react';

export default function StudyGroupHeader() {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box mx="auto" shadow="md" bg={useColorModeValue('white', 'gray.800')} width="6xl">
        <Box p={6}>
          <Box>
            <chakra.span fontSize="xs" textTransform="uppercase" color={useColorModeValue('brand.600', 'brand.400')}>
              Mar 10, 2019
            </chakra.span>
            <Heading
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
            >
              Accessibility tools for designers and developers
            </Heading>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Heading px={3} py={1} bg="gray.600" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
                Web Development
              </Heading>
              <Spacer />
              <chakra.span mx={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                Hosted by
              </chakra.span>
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link mx={2} fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
                  Jone Doe
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
