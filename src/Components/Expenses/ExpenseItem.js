import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  //js should be written before html code
  // const expenseDate = new Date(2022,3,28); //Date is inbuilt js constructor
  // const expenseTitle ='Car Insurance';
  // const expenseAmount = 294.67;
  
  

  return (
    // there should be only one root element inside return
    //here in jsx html we should use className instead of class
    // <div className="expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //     {/* toISOString method will return the proper date format */}
    //     <div className="expense-item__description">
    //         <h2>{expenseTitle}</h2>
    //           {/* we can replace hard coded data in opening and closing curly braces  */}
    //          {/* Inside curly braces we can run basic java script expression */}
    //         <div className="expense-item__price">{expenseAmount}</div>
    //     </div>
    // </div>

    // <div className="expense-item">
    //   <div>{props.date.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{props.title}</h2>
    //     <div className="expense-item__price">{props.amount}</div>
    //   </div>
    // </div>

    <Card className="expense-item">
      
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
