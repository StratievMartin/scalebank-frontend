import { useEffect, useState } from 'react'
import { BankStatement } from '../interfaces/Account.model'
import { getStatement } from '../services/statementService'
import { useParams } from 'react-router-dom'
import StatementTable from '../components/statement/StatementTable'
import ProgressCircle from '../components/ProgressCircle'
import { Flex, VStack } from '@chakra-ui/react'
export default function Statement() {
  const [statement, setStatement] = useState<BankStatement>({
    _id: '',
    bankName: '',
    accountHolder: '',
    accountNumber: '',
    statementPeriod: '',
    transactions: [],
  })
  const params = useParams()
  useEffect(() => {
    getStatement(params.id).then((res: any) => {
      if (res.status === 200) setStatement(res.data)
    })
  }, [])
  return (
    <VStack spacing="10">
      <Flex justifyContent="center">
        <ProgressCircle value={statement.transactions.length} />
      </Flex>
      <StatementTable data={statement} />
    </VStack>
  )
}
