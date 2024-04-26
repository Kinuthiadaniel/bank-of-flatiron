function Row({transacts}){
  const allTransactions = transacts.map((transact, index)=>{
    return (
      <tr key ={index}>
      <td>{transact.date}</td>
      <td>{transact.description}</td>
      <td>{transact.category}</td>
      <td>{transact.amount}</td>
    </tr>
    )
  })
  return (
    <>
    {allTransactions}
    </>
  )
}
export default Row;