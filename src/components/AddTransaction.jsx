import React, { useState } from "react"

function AddTransaction({handleSubmits}) {
  const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  })
  // const [isSubmit, setIsSubmit] = useState(...data)



  const handleChange = (event) => {
    const {name, value} = event.target;
    setData( data=> ({...data, [name]: value
    }))
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmits(data) 
    
   
  };


  return (
    <div className="container form-control" >
      <form className="form-control">
        <input type="date" onChange={handleChange} className="border-2 col-3"  name="date" placeholder={new Date()} />
        <input type="text" onChange={handleChange} className="border-2 col-3"  name="description" placeholder="Description" />
        <input type="text" onChange={handleChange} className="border-2 col-3"   name="category" placeholder="Category" />
        <input type="number" onChange={handleChange} className="border-2 col-3" name="amount" placeholder="Enter Amount" />
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