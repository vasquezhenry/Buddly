import { Text, Heading, Box, Center, Input, Button, Image, Stack, Flex, Spacer } from '@chakra-ui/react';
export default function AuthForm() {
  return (
    <Flex direction="column" height="100vh" bg="whitesmoke">
      <Box />
      <Spacer />
      <Center>
        <Box bg="white" padding="50px" boxShadow="lg" borderRadius="lg">
          <Image src="https://www.rowan.edu/_files/_files/images/RowanLogo.svg" width="200px" marginBottom={3} />
          <Heading size="lg">Login</Heading>
          <Text as="sub">You already have an account! just enter email {';)'}</Text>
          <Input placeholder="*.students.rowan.edu" marginTop={3} />
          <Button isFullWidth marginTop={3} variant="solid">
            Login
          </Button>
        </Box>
      </Center>
      <Spacer />
      <Text fontSize="sm" color="GrayText" textAlign="center">
        @2021 Buddly All rights reserved.
      </Text>
    </Flex>
  );
}
