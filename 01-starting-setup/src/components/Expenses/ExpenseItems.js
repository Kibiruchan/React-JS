import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI//Card';
import './ExpenseItems.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('Canco!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.expense.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
