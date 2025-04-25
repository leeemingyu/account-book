import React from "react";
import css from "./Summary.module.css";

const Summary = ({ totalIncome, totalExpense }) => {
  return (
    <div className={css.summary}>
      <div>
        <h2>수입</h2>
        <div>₩{totalIncome}</div>
      </div>
      <div>
        <h2>지출</h2>
        <div>₩{totalExpense}</div>
      </div>
    </div>
  );
};

export default Summary;
