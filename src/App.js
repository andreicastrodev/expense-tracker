import Expenses from "./components/Expense/Expenses/Expenses.component";
import NewExpense from "./components/Expense/NewExpense/New-expense.component";
import "./App.css";
import { useState } from "react";

const INITIAL_STATE = [];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
