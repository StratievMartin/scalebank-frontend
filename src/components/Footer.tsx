import { Box, Container } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <>
      <Box as="section" pt={{ base: '12', md: '24' }}>
        <Container py={{ base: '4', lg: '5' }}>
          <Box display="flex" justifyContent="end" as="nav" bg="bg-surface">
            <p>All rights reserved @2023</p>
          </Box>
        </Container>
      </Box>
    </>
  )
}
