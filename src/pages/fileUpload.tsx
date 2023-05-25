import { Flex, Text } from '@chakra-ui/react'
import CSVUploader from '../components/CsvFormUpload'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

export default function FileUpload() {
  const { user } = useAuthContext()

  return (
    <>
      {!user ? (
        <Flex justifyContent="center">
          <Text>
            You need to <Link to="/login">sign up</Link> first.
          </Text>
        </Flex>
      ) : (
        <CSVUploader />
      )}
    </>
  )
}
