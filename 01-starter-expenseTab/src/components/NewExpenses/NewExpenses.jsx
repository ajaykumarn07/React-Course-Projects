import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enetredExpenseData) => {
    const expenseData = {
      ...enetredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData)
    props.onAddExpense(expenseData);
  };



  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
