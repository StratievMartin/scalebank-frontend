import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

interface IHead {
  [key: string]: string
}

interface IBody {
  [key: string]: string
}

interface UiTableProps {
  tableName: String
  head: IHead
  body: IBody[]
}

export default function UiTable({ tableName, head, body }: UiTableProps) {
  return (
    <>
      {body && head && (
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>{tableName}</TableCaption>
            <Thead>
              <Tr>
                {Object.keys(head).map((header) => (
                  <Th key={header}>{head[header]}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {body.map((row, index) => (
                <Tr key={index}>
                  {Object.keys(row).map((cell, cellIndex) => (
                    <Td key={`${index}-${cellIndex}`}>{row[cell]}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
