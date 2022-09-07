import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet-Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },

  { id: "e2",
   title: "New TV", 
   amount: 799.49,
    date: new Date(2022, 2, 12)
   },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },

];


function App() {
  const[expenses, setExpenses]= useState(DUMMY_EXPENSES)
  
  const addExpenseHandler =(expense) =>{
    console.log(expense);
    setExpenses((prevExpenses) =>{
      return[expense, ...prevExpenses];
    });
   

  }
  return (
    <div className="App">
      <h2>Let's start</h2>
      {/* jsx feature writng html inside js code is something strange here we are using jsx */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
//we have to export app if we want to use it in another file
