import './ExpenseForm.css';
const ExpenseForm = ()=>{
    const titleChangeHandeler=(event)=>{
        console.log(event.target.value);
    }
    return(
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandeler}/>
            </div>

            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01'/>
            </div>

            <div className="new-expense__control label">
                <label>Date</label>
                <input type="date" min = "2019-01-01" max = "2023-12-31"/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit">Add button</button>
        </div>
       </form>

    );

}
export default ExpenseForm;