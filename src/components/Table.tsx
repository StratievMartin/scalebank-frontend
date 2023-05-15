import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
  console.log('head', head)
  console.log('body', body)

  return (
    <>
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
                  <td key={`${index}-${cellIndex}`}>{row[cell]}</td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
