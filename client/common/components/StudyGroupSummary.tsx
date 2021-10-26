import Icon from '@chakra-ui/icon';
import { Box, VStack, StackDivider, Flex, Center } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import React from 'react';

export default function StudyGroupSummary() {
  return (
    <Box backgroundColor="white" boxShadow="lg" borderRadius="lg" p={5} marginTop={5}>
      <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch">
        <Flex>
          <Center mt={3} mr={2}>
            <Icon w={6} h={6} />
          </Center>
          <Box>
            <Text>Thursday, October 28, 2021</Text>
            <Text>5:30 PM to 6:30 PM EDT</Text>
          </Box>
        </Flex>
        <Flex>
          <Center mt={3} mr={2}>
            <Icon w={6} h={6} />
          </Center>
          <Box>
            <Text>Online event</Text>
            <Text>Link visible for attendees</Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
