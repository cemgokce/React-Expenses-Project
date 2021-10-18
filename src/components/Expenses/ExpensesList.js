import React from "react";
import ExpenseItem from "./Expenseltem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((extences) => (
        <ExpenseItem
          key={extences.id}
          title={extences.title}
          amount={extences.amount}
          date={extences.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
