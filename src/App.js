import './App.css';
import React, { useState } from "react"
import Tables from "./components/Tables"
import Search from "./components/Search"
import AddTransaction from "./components/AddTransaction"
import Header from "./components/Header"
import Sort from "./components/Sort"

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
},
{
  date: "03-12-2016",
  description: "Rent",
  category: "Expense",
  amount: 1900,
}
]


function App() {
  const [data, setData] = useState(transactions)
  const [searchTerm, setSearchTerm] = useState("")
  // const [sort, setSort] = useState("")

  // function handleSort(e) {
  //   setSort(e.target.value)
  // }

  // const sorted = data.sort((item, index) => {
  //   return item.category.toLowerCase().includes(sort.toLowerCase()) || item.description.toLowerCase().includes(sort.toLowerCase())
  // })

  function handleSubmitsUpdates(newTransaction) {
    console.log(newTransaction)
    setData([...data, newTransaction])
  }
  function handleChange(e) {
    setSearchTerm(e.target.value)

  }

  const filter = data.filter((transactions) => {

    if (searchTerm.length > 0) {
      return transactions.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    else {
      return true;
    }

  })
  return (
    <div className="">


      <div className='container'>
        <Header />
        <Search search={searchTerm} handleChange={handleChange} />
        < AddTransaction onSubmits={handleSubmitsUpdates} />
        <Tables transacts={filter} />
      {/* //  <Sort sort={handleSort} sorted={sorted} /> */}
      </div>

    </div>
  );
}

export default App;
