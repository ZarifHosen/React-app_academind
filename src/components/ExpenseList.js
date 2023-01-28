import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
