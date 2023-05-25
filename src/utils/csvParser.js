import Papa from 'papaparse'

export const csvParser = (file, callback) => {
  Papa.parse(file, {
    header: true,
    quotes: true,
    complete: (result) => {
      const { data } = result

      const transformedObject = {
        bankName: data[0].bankName,
        accountHolder: data[0].accountHolder,
        accountNumber: data[0].accountNumber,
        statementPeriod: data[0].statementPeriod,
        transactions: [],
      }

      for (const obj of data) {
        const transaction = {
          id: parseInt(obj['transactions.id']),
          date: obj['transactions.date'],
          description: obj['transactions.description'],
          deposit:
            obj['transactions.deposit'] === '{}'
              ? null
              : obj['transactions.deposit'],
          withdrawal: parseInt(obj['transactions.withdrawal']),
          balance: parseInt(obj['transactions.balance']),
        }
        transformedObject.transactions.push(transaction)
      }
      callback(transformedObject)
    },
  })
}
