import React, { useState } from 'react'
import Papa from 'papaparse'
import { addStatement } from '../services/statementService'
import { BankStatement } from '../interfaces/Account.model'
import { Button, Flex, Input, VStack } from '@chakra-ui/react'
import StatementTable from './statement/StatementTable'
type CsvDataType = {
  data: string[][]
  errors: any[]
  meta: {
    delimiter: string
    linebreak: string
  }
}

export default function CSVUploader() {
  const [csvData, setCsvData] = useState<BankStatement>()
  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          setCsvData(result.data)
        },
      })
    }
  }

  return (
    <VStack spacing="10">
      <div>
        <Input type="file" onChange={handleCsvUpload} />
        {csvData && <StatementTable data={csvData} />}
      </div>
      <Flex justifyContent="center">
        {csvData && <Button onClick={() => addStatement(csvData)}>Send</Button>}
      </Flex>
    </VStack>
  )
}
