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
import { useSignup } from '../hooks/useSignup'

export default function Register() {
  const initialValues = {
    email: '',
    password: '',
    confirmpass: '',
    date: '',
    age: '',
  }
  const [values, setValues] = useState(initialValues)
  const [show, setShow] = React.useState(false)
  const { signup } = useSignup()
  const handleClick = () => setShow(!show)

  const handleSubmit = async () => {
    const { email, password } = values
    await signup({ email, password })
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
              onChange={handleInputChange}
              value={values.email}
              name="email"
              htmlSize={35}
              type="email"
              id="email"
              placeholder="Enter an email"
            />
            <InputGroup size="md">
              <Input
                onChange={handleInputChange}
                value={values.password}
                name="password"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter a password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                onChange={handleInputChange}
                value={values.confirmpass}
                name="confirmpass"
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
              onChange={handleInputChange}
              value={values.age}
              name="age"
              htmlSize={10}
              type="int"
              id="age"
              placeholder="Enter age"
            />
            <Text fontSize="1g" align="center" pb={4}>
              Date of Birth
            </Text>

            <Input
              onChange={handleInputChange}
              value={values.date}
              name="date"
              placeholder="Date of Birth"
              size="md"
              type="date"
            />
            <Button onClick={handleSubmit} colorScheme="teal" size="lg">
              Register
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  )
}
