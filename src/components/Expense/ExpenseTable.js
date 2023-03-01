import ExpenseItem from './ExpenseItem'
import './ExpenseTable.css'

const ExpenseTable = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-table__fallback'>No expenses found.</h2>;
    }


    return (
        <ul className='expenses-table'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </ul>

    )}

    export default ExpenseTable;
