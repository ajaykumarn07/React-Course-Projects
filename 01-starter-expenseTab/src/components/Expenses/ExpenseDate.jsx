import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const Year = props.date.getFullYear();
  const Day = props.date.toLocaleString("en-IN", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{Day}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{Year}</div>
    </div>
  );
};

export default ExpenseDate;
