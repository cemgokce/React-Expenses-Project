import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (Year) => {
    setFilteredYear(Year);
  };
  const filteredExpenses = props.items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterYear={filterHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};
export default Expenses;
