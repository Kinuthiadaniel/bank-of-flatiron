import './App.css';
import Tables from "./components/Tables"
import Search from "./components/Search"
import AddTransaction from "./components/AddTransaction"

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
  return (
    <div className="">
      <h1 className="mx-auto"> The  Royal Bank Of Flatiron</h1>

      <div className='container'>
        <Search transacts={transactions} />
        < AddTransaction />
        <Tables transacts={transactions} />


      </div>


    </div>
  );
}

export default App;
