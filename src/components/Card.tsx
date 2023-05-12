import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { AccountData } from '../interfaces/Account.model.ts'

export const UiCard = ({ accountData }: { accountData: AccountData }) => {
  return (
    <>
      <Card maxW={'400px'}>
        <CardHeader>
          <Heading size="md"> {accountData.account_holder}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {accountData.bank_name}
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {accountData.account_number}
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {accountData.statement_period}
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
