import React from "react";
import "./expense-list.styles.scss";
import ExpenseItem from "../ExpenseItem/Expense-item.component";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list_fallback">No Items Found</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {items.map((curEl, i) => (
          <ExpenseItem
            title={curEl.title}
            amount={curEl.amount}
            date={curEl.date}
            key={i}
          />
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
