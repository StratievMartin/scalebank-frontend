import React, { useState } from 'react'
import Papa from 'papaparse'
import UiTable from './Table'

type CsvDataType = {
  data: string[][]
  errors: any[]
  meta: {
    delimiter: string
    linebreak: string
  }
}
type StatementResponse = {
  data: string[][]
  errors: any[]
}

export default function CSVUploader() {
  const [csvData, setCsvData] = useState<any[]>([])

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result: CsvDataType) => {
          setCsvData(result.data)
        },
      })
    }
  }

  return (
    <div>
      <input type="file" onChange={handleCsvUpload} />
      {csvData.length > 0 && (
        <UiTable
          tableName="CSV Data"
          head={csvData[0]}
          body={csvData}
        ></UiTable>
      )}
    </div>
  )
}
