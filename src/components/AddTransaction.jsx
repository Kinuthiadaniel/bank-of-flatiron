import React, { useState } from "react"


function AddTransaction({ onSubmits }) {
  const [transactions, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  })
  // const [isSubmit, setIsSubmit] = useState(false)



  const handleChange = (event) => {
  const { name, value } = event.target;
    setTransaction({
      ...transactions, [name]: value
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmits(transactions)
setTransaction({
  date: "",
  description: "",
  category: "",
  amount: "",
})

  };


  return (
    <div className="container" >
      <form className="form-control" onChange= {handleChange}  onSubmit={handleSubmit}>
         <label htmlFor="date"> Date</label>
          <input type="date"  onChange={handleChange}className="border-2 col-2" name="date" value={transactions.date} placeholder={new Date()} />
          <input type="text"  onChange={handleChange} className="border-2 col-3" name="description" value={transactions.description} placeholder="Description" />
          <input type="text"  onChange={handleChange} className="border-2 col-3" name="category" value={transactions.category} placeholder="Category" />
          <input type="number"   onChange={handleChange} className="border-2 col-3" name="amount" value={transactions.amount} placeholder="Enter Amount" />

      <button type="submit"    className="btn btn-primary mx-auto d-grid gap-2 d-md-block" >Add Transaction</button>
    
       

      </form>
          </div>
  )


}




export default AddTransaction;