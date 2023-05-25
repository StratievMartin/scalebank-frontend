import React, { useState } from 'react'
import { addStatement } from '../services/statementService'
import { BankStatement } from '../interfaces/Account.model'
import { Button, Flex, Input, Text, VStack } from '@chakra-ui/react'
import StatementTable from './statement/StatementTable'
import { csvParser } from '../utils/csvParser'

export default function CsvFormUpload() {
  const [csvData, setCsvData] = useState<BankStatement>()
  const [error, setError] = useState<boolean>()

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      setError(undefined)
      csvParser(file, (obj: BankStatement) => {
        setCsvData(obj)
      })
    }
  }

  const addStatementHandler = () => {
    if (csvData) {
      addStatement(csvData).then((res) => {
        if (res.status != 201) setError(false)
        setError(true)
        setCsvData(false)
      })
    }
  }
  return (
    <VStack spacing="10">
      <div>
        <VStack spacing="10">
          <Input type="file" onChange={handleCsvUpload} maxW="300px" />
          {csvData && <StatementTable data={csvData} />}
        </VStack>
      </div>
      <Flex justifyContent="center">
        {csvData && <Button onClick={addStatementHandler}>Send</Button>}
      </Flex>
      {error !== undefined && (
        <Text color={error ? 'teal.500' : 'red.500'}>
          {error ? 'Statement added successfully!' : 'Failed to add statement.'}
        </Text>
      )}
    </VStack>
  )
}
