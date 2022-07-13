import React from "react";
import AddForm from "../../Components/add-form";
import TopFold from "../../Components/topfold";
import "./add-expense.css";
const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};
export default AddExpense;
