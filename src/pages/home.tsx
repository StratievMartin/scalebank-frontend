import { Box } from '@chakra-ui/react'
import { homeStyles } from '../styles/homeStyles.jsx'
import mock from '../mock-data/mock.json'
import ProgressCircle from '../components/CircularProgress.tsx'
import UiTable from '../components/Table.tsx'
import { UiCard } from '../components/Card.tsx'
export default function Home() {
  return (
    <>
      <Box display="flex">
        {mock.map((el) => {
          return (
            <div key={el.id}>
              <UiCard accountData={el} />
              {el.transactions.map((transaction) => {
                return (
                  <Box sx={homeStyles} key={transaction.id}>
                    <p>{transaction?.deposit}</p>
                    <p>{transaction?.description}</p>
                    <p>{transaction?.date}</p>
                  </Box>
                )
              })}
            </div>
          )
        })}
      </Box>
      <ProgressCircle value={50} />
      <UiTable />
    </>
  )
}
