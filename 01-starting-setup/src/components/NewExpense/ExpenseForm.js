import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const[title, setTitle] = useState('');
    const[amount, setAmount] = useState('');
    const[date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    };

    return <form>
        <div className = "new-expense__controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="01-01-2020" max="31-12-2025" onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>;
};

export default ExpenseForm;