import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI//Card';
import './ExpenseItems.css';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expense-item__price">${props.expense.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
