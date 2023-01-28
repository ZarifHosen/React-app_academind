import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
