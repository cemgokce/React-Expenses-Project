import React, {useState}from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

  const [isEditing,setEditting] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditting(false);
  };

  const startEditingHandler =()=>{
    setEditting(true);
  }
  const stopEditingHandler =()=>{
    setEditting(false);
  }

  return (
    <div>
      <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>}
      </div>
    </div>
  );
};
export default NewExpense;
