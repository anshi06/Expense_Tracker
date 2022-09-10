import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpense = (props) => {
  const saveDataExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const [isEditing, setisEditing] = useState(false);
  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandeler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandeler}
          onSaveExpenseData={saveDataExpenseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
