import React from "react";
import NewExpenseForm from "./NewExpenseForm/New-expense-form.component";
import "./new-expense.styles.scss";

const NewExpense = ({ onAddExpense }) => {
  const saveNewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveNewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
