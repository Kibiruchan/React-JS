import React, { useState } from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState(2020);
    const [expenses, setExpenses] = useState(props.expenses);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(Number(selectedYear));
    var filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear() === Number(selectedYear);
    });
    setExpenses(filteredExpenses);
  }

    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem key={expense.key} expense={expense} />
        ))}
      </Card>
    );
}

export default Expenses;