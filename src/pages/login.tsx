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
import { useState } from 'react'
import { loginStyle } from '../styles/loginStyle'

export default function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const initialValues = {
    username: '',
    password: '',
  }
  const [values, setValues] = useState(initialValues)

  const click = () => {
    console.log(values.username, values.password)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <>
      <Container>
        <Box sx={loginStyle}>
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
              onChange={handleInputChange}
              value={values.username}
              name="username"
              htmlSize={35}
              type="username"
              id="username"
              pb={2}
              placeholder="Username"
            />
            <InputGroup size="md">
              <Input
                onChange={handleInputChange}
                value={values.password}
                name="password"
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
