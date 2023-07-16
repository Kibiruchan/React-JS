import './ExpenseDate.css';

function ExpenseDate(props){
    const day = props.date.toLocaleString('de-DE', { day: '2-digit' } );
    const month = props.date.toLocaleString('de-DE', { month: 'long' } );
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__date'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;