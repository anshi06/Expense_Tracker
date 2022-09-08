import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     eneteredTitle : event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle : event.target.value}

        // })
    }

   
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     eneteredAmount : event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount : event.target.value}

        // })
    }

   
    const dateChangeHandler=(event)=>{
         setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })

        // setUserInput((prevState) =>{
        //     return {...prevState, enteredDate : event.target.value}

        // })
    }

    const submitHandler = (event) =>{
        // when form is submitted then page will reload and it will send request to server which is hosting it but we do not 
        // want that default behaviour so we use this 
        event.preventDefault(); // it will not send any request to server it will be managed by js manually
        const expenseData ={
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control label">
                <label>Date</label>
                <input type="date" value={enteredDate} min = "2019-01-01" max = "2023-12-31"onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add button</button>
        </div>
       </form>

    );

}
export default ExpenseForm;