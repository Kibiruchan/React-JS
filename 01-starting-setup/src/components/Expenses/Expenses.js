import React from "react"
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [filter, setFilter] = React.useState("0");

    const filterChangeHandler = (event) =>{
        console.log(event.target.value);
        setFilter(event.target.value);
    };

    return (
      <div>        
        <Card className="expenses">
          <ExpensesFilter selected={filter} onFilterChange = {filterChangeHandler}/>  
          <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
          <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
          <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
        </Card>
      </div>
    );
}

export default Expenses;