import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React from "react";
const NewExpense=(props) =>{
    const saveDataExpenseHandler=(enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()

        };
        console.log(expenseData);
        props.onAddExpense(expenseData); 

    }
    return(
       <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveDataExpenseHandler}/>
        {/* we can create our own prop or event to communicate btw child to parent, naming convention is up to you */}

       </div>
    )
};
export default NewExpense;