import React from "react";
import css from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={css.balance}>
      <h2>잔액</h2>
      <div>₩200,000</div>
    </div>
  );
};

export default Balance;
