import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react'
import { BankStatement } from '../../interfaces/Account.model.ts'
import { Link } from 'react-router-dom'

export const StatementCard = ({ statement }: { statement: BankStatement }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{statement?.accountHolder}</Heading>
        </CardHeader>
        <CardBody>
          <Text color={'teal'}>{statement._id}</Text>
          <Text>{statement.accountNumber}</Text>
          <Text>{statement.bankName}</Text>
          <Text>{statement.statementPeriod}</Text>
        </CardBody>
        <CardFooter>
          <Link to={`/statement/${statement._id}`}>
            <Button>View here</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}
