import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem({ expense }) {
  const [title, setTitle] = useState(expense.title);
  console.log("This much time component is rendered")

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title)
  };
  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={expense.date} />
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
