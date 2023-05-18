import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [Uval,setUVal] = useState("")
  const [Pval,setPVal] = useState("")

  const click = () => {
    console.log(Uval,Pval)
  }
  const Uchange = event => {
    setUVal(event.target.value)
    
  }
  const Pchange = event => {
    setPVal(event.target.value)
    
  }


  return (
    <>
      <Container>
        <Box borderWidth="1px" borderRadius="1g" p={4}>
          <Text fontSize="1g" align="center">
            Log in
          </Text>
          <Text fontSize="1g" align="center" pb={4}>
            Don't have an account?{' '}
            <Link color="teal.500" href="register">
              Register
            </Link>
          </Text>
          <VStack spacing={2} align="stretch">
            <Input
            onChange={Uchange}
            value = {Uval}
              htmlSize={35}
              type="username"
              id="username"
              pb={2}
              placeholder="Username"
            />
            <InputGroup size="md">
              <Input
              onChange={Pchange}
              value = {Pval}
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
            <Button onClick={click} colorScheme="teal" size="lg">
              Login
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  )
}
