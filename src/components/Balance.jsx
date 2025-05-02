import React from "react";
import css from "./Balance.module.css";
import { useRecoilValue } from "recoil";
import { balanceState } from "../recoil/selector";

const Balance = () => {
  const balance = useRecoilValue(balanceState);

  return (
    <div className={css.balance}>
      <h2>잔액</h2>
      <div>₩{balance.toLocaleString()}</div>
    </div>
  );
};

export default Balance;
