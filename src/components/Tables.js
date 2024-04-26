function Tables({transactions}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{transactions.date}</td>
            <td>{transactions.description}</td>
            <td>{transactions.category}</td>
            <td>{transactions.amount}</td>
          </tr>
          <tr>
            <td>12-12-2015</td>
            <td>Paycheck from Daniel</td>
            <td>Income</td>
            <td>200000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
            
}

export default Tables;