import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <>
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10">
              {isDesktop ? (
                <Flex alignItems="center" justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    <Link to="/">Home</Link>
                    <Link to="/upload">
                      <Box borderBottom="2px" borderColor="teal">
                        Upload a file
                      </Box>
                    </Link>
                  </ButtonGroup>
                  <HStack spacing="8">
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                    <Link to="/Profile">Profile</Link>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}
