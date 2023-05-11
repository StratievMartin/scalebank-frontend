import { Box } from '@chakra-ui/react'
import { mock } from '../mock-data/mock.js'
import { homeStyles } from '../styles/homeStyles.jsx'
import ProgressCircle from '../components/CircularProgress.js'

export default function Home() {
  interface Transaction {
    id: number
    date: string
    description: string
    deposit: number | null
    withdrawal: number | null
    balance: number
  }

  return (
    <>
      <h2>{mock.bank_name}</h2>
      <h2>{mock.account_holder}</h2>
      <h2>{mock.account_number}</h2>
      <h2>{mock.statement_period}</h2>
      <ProgressCircle value={50} />
      <Box>
        {mock.transactions.map((transaction: Transaction) => {
          return (
            <Box sx={homeStyles} key={transaction.id}>
              <p>{transaction?.deposit}</p>
              <p>{transaction?.description}</p>
              <p>{transaction?.date}</p>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
