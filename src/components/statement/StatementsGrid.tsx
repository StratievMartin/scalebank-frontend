import { useEffect, useState } from 'react'
import { BankStatement } from '../../interfaces/Account.model.ts'
import { getAllStatements } from '../../services/statementService'
import { StatementCard } from './StatementCard.tsx'
import { Container, GridItem, SimpleGrid } from '@chakra-ui/react'
export default function StatementsGrid() {
  const [statements, setStatements] = useState<BankStatement[]>([])

  useEffect(() => {
    getAllStatements().then((res: any) => {
      if (res.status === 200) setStatements(res.data)
    })
  }, [])

  return (
    <Container py={{ base: '4', lg: '5' }}>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {statements?.map((statement) => (
          <GridItem key={statement._id}>
            <StatementCard statement={statement} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  )
}
