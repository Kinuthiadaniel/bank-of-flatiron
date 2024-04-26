import './App.css';
import Tables from "./components/Tables"
function App() {
  const transactions =[{
    date: "12-12-2015",
    description: "Salary",
    category:"Business",
    amount: 1000,
  },
  {
    date: "12-12-2015",
    description:"Paycheck from Daniel",
    category:"Income",
    amount: 200000,
  },
  {
    date: "12-12-2015",
    description: "Food",
    category:"Expense",
    amount: 900,
  }
]
  return (
    <div className="">
    <h1> The  Royal Bank Of Flatiron</h1>
    <Tables transactions={transactions}/>
    </div>
  );
}

export default App;
