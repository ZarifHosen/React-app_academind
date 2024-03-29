import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const [month, day, year] = props.date
    .toLocaleDateString("en-US", options)
    .split(",");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
