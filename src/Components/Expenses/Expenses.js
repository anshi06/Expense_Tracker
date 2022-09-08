import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const changeYearHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
   
  }
  const filteredExpenses = props.items.filter(element =>
    { return (element.date.getFullYear().toString() === filteredYear)
      })

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeYear = {changeYearHandler} />

      {filteredExpenses.length===0 ? (<p>No items Found</p>) : (filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))}

      
    </Card>
  );
}
export default Expenses;
