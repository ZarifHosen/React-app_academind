import {useState} from 'react';
import ExpenseTable from "./ExpenseTable";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpensesFilter"

function ExpenseList({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseTable items={filteredExpenses}/>

            </Card>

        </div>
    );
}

export default ExpenseList;
