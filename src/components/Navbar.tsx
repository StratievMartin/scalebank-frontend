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
            <HStack spacing="10" justify="space-between">
              {isDesktop ? (
                <Flex alignItems="center" justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Home', 'Test'].map((item) => (
                      <Link key={item} to={`/${item}`}>
                        {item}
                      </Link>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost">
                      <Link to="/login">Sign in</Link>
                    </Button>
                    <Button variant="primary">
                      <Link to="/register">Sign up</Link>
                    </Button>
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
