import {
  Box,
  Text,
  Link,
  VStack,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import React from 'react'

export default function Register() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Container>
        <Box borderWidth="1px" borderRadius="1g" p={4}>
          <Text fontSize="1g" align="center">
            Create account
          </Text>
          <Text fontSize="1g" align="center" pb={4}>
            Already have an account?{' '}
            <Link color="teal.500" href="login">
              Log in
            </Link>
          </Text>
          <VStack spacing={2} align="stretch">
            <Input
              htmlSize={35}
              type="username"
              id="username"
              pb={2}
              placeholder="Username"
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Confirm password"
              />
              <InputRightElement width="4.5rem"></InputRightElement>
            </InputGroup>
            <Text fontSize="1g" align="center" pb={4}>
              Personal Details
            </Text>
            <Input
              htmlSize={10}
              type="int"
              id="age"
              pb={2}
              placeholder="Enter age"
            />
            <Text fontSize="1g" align="center" pb={4}>
              Date of Birth
            </Text>

            <Input placeholder="Date of Birth" size="md" type="date" />
            <Button colorScheme="teal" size="lg">
              Register
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  )
}
