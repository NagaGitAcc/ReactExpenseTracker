import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [addExpenseFlag, setAddExpenseFlag] = useState(true);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {addExpenseFlag && <button onClick={() => setAddExpenseFlag(false)}>Add New Expense</button>}
      {!addExpenseFlag && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} expenseFlag={setAddExpenseFlag} />}
    </div>
  );
};

export default NewExpense;
