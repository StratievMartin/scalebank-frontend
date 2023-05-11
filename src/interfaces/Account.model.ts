export interface AccountData {
  id: number
  bank_name: string
  account_holder: string
  account_number: string
  statement_period: string
}

export interface Transaction {
  id: number
  date: string
  description: string
  deposit: number | null
  withdrawal: number | null
  balance: number
}
