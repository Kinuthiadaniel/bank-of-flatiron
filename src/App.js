import './App.css';
import React, {useState} from "react"
import Tables from "./components/Tables"
import Search from "./components/Search"
import AddTransaction from "./components/AddTransaction"
import Header from "./components/Header"

const transactions = [{
  date: "12-12-2015",
  description: "Salary",
  category: "Business",
  amount: 1000,
},
{
  date: "12-12-2015",
  description: "Paycheck from Daniel",
  category: "Income",
  amount: 200000,
},
{
  date: "12-12-2015",
  description: "Food",
  category: "Expense",
  amount: 900,
}
]


function App() {
  const [data, setData] = useState(transactions)
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmits(transactions){
    setData((data)=>[...data, transactions])
  }
  function handleChange(e){
return setSearchTerm(e.target.value)
  }

  const filter = data.filter((transaction)=>{
    
    if(searchTerm.length > 0 ){
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    else{
      return true;
    }
  
   })
  return (
    <div className="">
      

      <div className='container'>
        <Header />
        <Search search={searchTerm} handleChange= {handleChange} />
        < AddTransaction handleSubmit={handleSubmits}/>
        <Tables transacts={filter} />
  
      </div>
       
    </div>
  );
}

export default App;
