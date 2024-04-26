import Row from "./Row";

const transactions = [{
  date: "12-12-2015",
  description: "Salary",
  category: "Business",
  amount: 1000,
},
  {
    date: "12-12-2015",
    description:"Paycheck from Daniel",
    category:"Income",
    amount: 200000,
  },
  {
    date: "12-12-2015",
    description: "Food",
    category:"Expense",
    amount: 900,
  }
]
function Tables() {

  return (
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>  Description</th>
          <th >Category</th>
          <th >Amount</th>
        </tr>

      </thead>
      <tbody>
        <Row transacts={transactions} />
      </tbody>

    </table>
  )

}

export default Tables;