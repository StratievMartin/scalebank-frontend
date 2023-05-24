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
import { useState } from 'react'
import { useSignin } from '../hooks/useSignin'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
}
export default function Login() {
  const [values, setValues] = useState(initialValues)
  const [show, setShow] = useState(false)
  const { signin } = useSignin()
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleClick = () => setShow(!show)

  const handleSubmit = async () => {
    await signin(values)
    navigate('/')
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
            <Button onClick={handleSubmit} colorScheme="teal" size="lg">
              Login
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  )
}
