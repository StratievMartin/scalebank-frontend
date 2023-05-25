import { Box, Flex, Text } from '@chakra-ui/react'
import StatementsGrid from '../components/statement/StatementsGrid.tsx'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
export default function Home() {
  const { user } = useAuthContext()

  return (
    <>
      {!user ? (
        <Flex justifyContent="center">
          <Box>
            Welcome to{' '}
            <Text display="inline" color="teal.500">
              Scalebank
            </Text>
            <Text>
              In order to browse our statements you need to{' '}
              <Link to="/login">sign up</Link> first.
            </Text>
          </Box>
        </Flex>
      ) : (
        <StatementsGrid />
      )}
    </>
  )
}
