import { Container, Input, Button } from '@chakra-ui/react'

export default function profile() {
  return (
    <>
      <Container>
        Welcome User
        <div>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Email" />
          <Input placeholder="Date" type="date" />
          <Input placeholder="Age" type="number" />
        </div>
        <div>
          <Button colorScheme="blue">Add</Button>
          <Button colorScheme="green">Update</Button>
          <Button colorScheme="red">Delete</Button>
        </div>
        <div>
          <Button colorScheme="red">Logout</Button>
        </div>
      </Container>
    </>
  )
}
