import React from "react";
import css from "./Summary.module.css";
import { useRecoilValue } from "recoil";
import { totalExpenseState, totalIncomeState } from "../recoil/selector";

const Summary = () => {
  const income = useRecoilValue(totalIncomeState);
  const expense = useRecoilValue(totalExpenseState);

  return (
    <div className={css.summary}>
      <div>
        <h2>수입</h2>
        <div>{income.toLocaleString()}</div>
      </div>
      <div>
        <h2>지출</h2>
        <div>{expense.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Summary;
