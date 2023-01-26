import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [entered, setEntered] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = event => {
    setUserInput(prevState =>  ({...prevState, enteredTitle: event.target.value}) );
  };
  const amountChangeHandler = event => {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = event => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control label'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control label'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control label'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange= {dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
