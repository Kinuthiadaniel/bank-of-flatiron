import React, { useState } from "react"

function AddTransaction() {
  const [variable, setVariable] = useState(false)


  return (
    <div className="container " >
    
      <input type="date" className="border-2 col-3" id="date" placeholder={new Date()}/>
      <input type="text" className="border-2 col-3" id="description" placeholder="Description"/>
      <input type="text" className="border-2 col-3" id="category" placeholder="Category"/>
      <input type="number" className="border-2 col-3" id="amount" placeholder="Enter Amount"/>
      <div>
        <button className="btn btn-primary mx-auto" onClick={() => setVariable(!variable)}>Add Transaction</button>
      </div>
    </div>
  )
}

export default AddTransaction;