import React from "react";
import css from "./Summary.module.css";

const Summary = ({ totalIncome, totalExpense }) => {
  return (
    <div className={css.summary}>
      <div>
        <h2>수입</h2>
        <div>₩{totalIncome.toLocaleString()}</div>
      </div>
      <div>
        <h2>지출</h2>
        <div>₩{totalExpense.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Summary;
