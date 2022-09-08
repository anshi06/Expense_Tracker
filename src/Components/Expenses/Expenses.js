import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList expenseli={filteredExpenses}/>
      
    </Card>
  );
}
export default Expenses;
