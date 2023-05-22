export interface BankStatement {
  _id: string
  bankName: string
  accountHolder: string
  accountNumber: string
  statementPeriod: string
  transactions: Transaction[]
}

export interface Transaction {
  _id: string
  date: string
  description: string
  deposit: number | null
  withdrawal: number | null
  balance: number
}
