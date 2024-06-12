import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2024, 1, 24);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 310.36

  // const [title, setTitle] = useState(props.title);
  // console.log('Expense Item Component');

  //let title = props.title;

  // const clickHandler = () => {
  //   // window.alert('Clicked!!')
  //   //title = "Updated!!!";
  //   setTitle("Updated Title");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={()=>{window.alert("Clicked")}}>Change Title</button> */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
