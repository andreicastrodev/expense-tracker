import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/Expense-filter.component";
import ExpenseList from "../ExpenseList/Expense-list.component";
import Card from "../../Card/Card.component";
import ExpenseChart from "../ExpenseChart/Expense-chart.component";
import "./expenses.styles.scss";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    console.log(expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
