import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm = ()=>{
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    });
    const titleChangeHandler=(event)=>{
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            eneteredTitle : event.target.value,
        })
    }

   
    const amountChangeHandler=(event)=>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            eneteredAmount : event.target.value,
        })
    }

   
    const dateChangeHandler=(event)=>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            eneteredDate : event.target.value,
        })
    }
    return(
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control label">
                <label>Date</label>
                <input type="date" min = "2019-01-01" max = "2023-12-31"onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit">Add button</button>
        </div>
       </form>

    );

}
export default ExpenseForm;