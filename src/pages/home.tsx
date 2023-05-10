export default function Home() {
  const mock = {
    id: 1,
    bank_name: 'XYZ Bank',
    account_holder: 'John Doe',
    account_number: '1234567890',
    statement_period: '1st January 2023 - 31st January 2023',
    transactions: [
      {
        id: 1,
        date: '1/1/2023',
        description: 'Opening Balance',
        deposit: null,
        withdrawal: 0,
        balance: 10000,
      },
      {
        id: 2,
        date: '1/5/2023',
        description: 'Salary',
        deposit: 5000,
        withdrawal: 0,
        balance: 15000,
      },
      {
        id: 3,
        date: '1/10/2023',
        description: 'Grocery Store',
        deposit: null,
        withdrawal: 500,
        balance: 14500,
      },
      {
        id: 4,
        date: '1/15/2023',
        description: 'ATM Withdrawal',
        deposit: null,
        withdrawal: 200,
        balance: 14300,
      },
    ],
  }

  return (
    <>
      <h2>{mock.bank_name}</h2>
      <h2>{mock.account_holder}</h2>
      <h2>{mock.account_number}</h2>
      <h2>{mock.statement_period}</h2>
      <p>
        {mock.transactions.map((transaction) => {
          return (
            <div
              key={transaction.id}
              style={{
                border: '1px solid red',
                padding: '20px',
                margin: '10px',
              }}
            >
              <p>{transaction?.deposit}</p>
              <p>{transaction?.description}</p>
              <p>{transaction?.date}</p>
            </div>
          )
        })}
      </p>
    </>
  )
}
