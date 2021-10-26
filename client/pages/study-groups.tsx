import { Checkbox } from '@chakra-ui/checkbox';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Grid, GridItem, Spacer, StackDivider, Text, VStack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import AppLayout from '../common/components/layout/Layout';
import StudyGroupCard from '../common/components/StudyGroupCard';

export default function StudyGroups() {
  const router = useRouter();

  return (
    <AppLayout>
      <Head>
        <title>Study Groups - Buddly</title>
      </Head>
      <Grid templateRows="repeat(2,1fr)" templateColumns="repeat(5,1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={1}>
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={2} align="stretch">
            <InputGroup w="96" display={{ base: 'none', md: 'flex' }} marginBottom={3} bg="white" size="lg">
              <InputLeftElement color="gray.500" children={<FiSearch />} />
              <Input placeholder="Search for rooms..." />
            </InputGroup>
            <Select size="lg" bg="white">
              <option value="option1">All Classes</option>
              <option value="option2">Senior Project</option>
              <option value="option3">Web Development (FALL 2021)</option>
            </Select>
            <Select size="lg" bg="white">
              <option value="option1">Any Day</option>
              <option value="option1">Today</option>
              <option value="option2">This Week</option>
              <option value="option3">This Weekend</option>
              <option value="option3">Next Week</option>
            </Select>
            <Select size="lg" bg="white">
              <option value="option1">Remote</option>
              <option value="option1">In Person</option>
            </Select>
            <Checkbox marginTop={3}>Include Past Due</Checkbox>
          </VStack>
        </GridItem>

        <GridItem rowSpan={2} colSpan={4}>
          <Box maxHeight="container.md" overflow="auto">
            <VStack divider={<StackDivider borderColor="gray.200" />} spacing={2} align="stretch">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <Box key={i} onClick={() => router.push(`/study-groups/${i}`)}>
                    <StudyGroupCard
                      post={{
                        title: 'Accessibility tools for designers and developers',
                        user: 'John Doe',
                        date: 'Mar 10, 2019',
                        class: 'Web Development',
                        description:
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
                      }}
                    />
                  </Box>
                ))}
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </AppLayout>
  );
}
