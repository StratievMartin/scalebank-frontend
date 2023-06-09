import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  VStack,
  Text,
} from '@chakra-ui/react'
import { BankStatement, Transaction } from '../../interfaces/Account.model'

interface UiTableProps {
  tableName?: String
  data: BankStatement
}

export default function StatementTable({ tableName, data }: UiTableProps) {
  return (
    <>
      {data && (
        <VStack spacing="10">
          <Flex justifyContent="center" textAlign="center">
            <Box border="1px solid teal" rounded="md" p="10">
              <Text fontWeight="bold" fontSize="2xl" color="teal.500">
                {data?.accountHolder}
              </Text>
              <Text>{data?.accountNumber}</Text>
              <Text>{data?.bankName}</Text>
              <Text>{data?.statementPeriod}</Text>
            </Box>
          </Flex>
          <TableContainer>
            <Table variant="striped" colorScheme="green">
              {tableName && <TableCaption>{tableName}</TableCaption>}
              <Thead>
                <Tr>
                  <Th>Description</Th>
                  <Th>Withdrawal</Th>
                  <Th>Balance</Th>
                  <Th>Deposit</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.transactions?.map((transaction: Transaction) => (
                  <Tr key={transaction._id || transaction.id}>
                    <Td>{transaction.description}</Td>
                    <Td>{transaction.withdrawal}</Td>
                    <Td>{transaction.balance}</Td>
                    <Td>
                      {transaction.deposit !== null ? transaction.deposit : '-'}
                    </Td>
                    <Td>{transaction.date}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      )}
    </>
  )
}
