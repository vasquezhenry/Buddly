import { Box, Text, Grid, GridItem, VStack, Heading, StackDivider, Center } from '@chakra-ui/layout';
import {
  Flex,
  useColorModeValue,
  chakra,
  Link,
  Image,
  Spacer,
  Avatar,
  AvatarGroup,
  List,
  ListIcon,
  ListItem,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import AppLayout from '../../../common/components/layout/Layout';
import StudyGroupHeader from '../../../common/components/StudyGroupHeader';
import StudyGroupSummary from '../../../common/components/StudyGroupSummary';

export default function Room() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <StudyGroupHeader />
      <Grid templateColumns="repeat(5,1fr)" gap={1}>
        <GridItem colSpan={3}>
          <Heading size="md" marginTop={10} marginBottom={5}>
            Details
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nostrum, enim laborum doloremque sed ab
            mollitia expedita corrupti iure corporis quisquam consectetur assumenda! Maxime, suscipit quod doloremque
            sit quas dolore.
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nostrum, enim laborum doloremque sed ab
            mollitia expedita corrupti iure corporis quisquam consectetur assumenda! Maxime, suscipit quod doloremque
            sit quas dolore.
          </Text>
          <Heading size="md" marginTop={10} marginBottom={5}>
            Attendees(5)
          </Heading>
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Heading size="md" marginTop={10} marginBottom={5}>
            Comments
          </Heading>
        </GridItem>
        <GridItem colStart={4} colEnd={6}>
          <StudyGroupSummary />
          <Button isFullWidth>Attend</Button>
        </GridItem>
      </Grid>
    </AppLayout>
  );
}
