import React, { useState } from "react"


function AddTransaction({handleSubmits}) {
  const [transactions, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  })
  // const [isSubmit, setIsSubmit] = useState(false)



  const handleChange = (event) => {
    const {name, value} = event.target;
    setData((data)=>({
      ...data,[name]: value
    }))
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmits(transactions) 
  
   
  };


  return (
    <div className="container" >
      <form className="form-control">
        <input type="date" onChange={handleChange} className="border-2 col-3" name="date"  value = {transactions.date} placeholder={new Date()} />
        <input type="text" onChange={handleChange} className="border-2 col-3" name="description" value= {transactions.description} placeholder="Description" />
        <input type="text" onChange={handleChange} className="border-2 col-3"   name="category" value ={transactions.category} placeholder="Category" />
        <input type="number" onChange={handleChange} className="border-2 col-3" name="amount" value = {transactions.amount} placeholder="Enter Amount" />
      </form>

      <div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary mx-auto" >Add Transaction</button>

        {
        
        }
      </div>
    </div>
  )


}




export default AddTransaction;