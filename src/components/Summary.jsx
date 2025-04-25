import React from "react";
import css from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={css.summary}>
      <div>
        <h2>수입</h2>
        <div>₩300,000</div>
      </div>
      <div>
        <h2>지출</h2>
        <div>₩100,000</div>
      </div>
    </div>
  );
};

export default Summary;
