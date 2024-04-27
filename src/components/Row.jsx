function Row({ transacts }) {
  const allTransactions = transacts.map((transact, index) => {
    return (
    <tbody key={index+1}>
 <tr >
          <td>{transact.date}</td>
          <td>{transact.description}</td>
          <td>{transact.category}</td>
          <td>{transact.amount}</td>
        </tr>
      
    </tbody>
       

    )
  })
  return (
    <>
      {allTransactions}
    </>
  )
}
export default Row;