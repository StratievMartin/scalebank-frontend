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
   
   export default function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
     return (
       <><Container>
         <Box borderWidth="1px" borderRadius="1g" p={4}>
     <Text fontSize="1g" align="center">Log in</Text>
     <Text fontSize="1g" align="center" pb={4}>Don't have an account? <Link color='teal.500' href='register'>Register</Link></Text>
     <VStack
     spacing={2}
     align='stretch'
     >
     <Input htmlSize={35} type='username' id="username"pb={2} placeholder='Username' />
     <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
            
          </Button>
        </InputRightElement>
      </InputGroup>
<Button colorScheme='teal' size='lg'>
    Login
  </Button>
     </VStack>
   </Box>
   </Container>
       </>
     )
     
   }