import "./ExpenseItem.css";

function ExpenseItem(props) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = props.date.toLocaleDateString("en-US", options);

  return (
    <div className="expense-item">
      <div>{formattedDate}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
