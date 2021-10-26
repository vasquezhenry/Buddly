import React from 'react';
import { chakra, Box, Image, Flex, useColorModeValue, Link, Heading, Text, Button } from '@chakra-ui/react';
import { Post } from '../models/post';
import { FaComments } from 'react-icons/fa';

interface Props {
  post: Post;
}
export default function StudyGroupCard({ post }: Props) {
  return (
    <Box
      mx="auto"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="7xl"
      cursor="pointer"
      _hover={{ border: '1px solid', borderColor: 'gray.600' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          {post.date}
        </chakra.span>
        <Heading px={3} py={1} bg="gray.600" color="gray.100" fontSize="sm" fontWeight="700" rounded="md">
          {post.class}
        </Heading>
      </Flex>

      <Box mt={2}>
        <Heading fontSize="2xl" color={useColorModeValue('gray.700', 'white')} fontWeight="700">
          {post.title}
        </Heading>
        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          {post.description}
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Flex>
          <Button
            leftIcon={<FaComments />}
            colorScheme={'gray'}
            backgroundColor="white"
            color="gray.600"
            _hover={{ backgroundColor: 'white' }}
          >
            4 Comments
          </Button>
        </Flex>
        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{ base: 'none', sm: 'block' }}
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <Link color={useColorModeValue('gray.700', 'gray.200')} fontWeight="700" cursor="pointer">
            {post.user}
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
