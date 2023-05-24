import { Container, Input, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
const initialValues = {
  username: '',
  password: '',
  mail: '',
  date: '',
  age: '',
}

export default function Profile() {
  const [values, setValues] = useState(initialValues)
  const { user } = useAuthContext()

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
        <Flex justifyContent="center">
          {user && (
            <Text color="teal.500" fontWeight="semibold">
              {user.email}
            </Text>
          )}
        </Flex>
        <VStack spacing="3" my="5">
          <Input
            onChange={handleInputChange}
            value={values.username}
            name="username"
            placeholder="Username"
          />
          <Input
            onChange={handleInputChange}
            value={values.password}
            name="password"
            placeholder="Password"
          />
          <Input
            onChange={handleInputChange}
            value={values.mail}
            name="mail"
            placeholder="Email"
          />
          <Input
            onChange={handleInputChange}
            value={values.date}
            name="date"
            placeholder="Date"
            type="date"
          />
          <Input
            onChange={handleInputChange}
            value={values.age}
            name="age"
            placeholder="Age"
            type="number"
          />
        </VStack>
        <Flex justifyContent="center">
          <Button>Save</Button>
        </Flex>
      </Container>
    </>
  )
}
