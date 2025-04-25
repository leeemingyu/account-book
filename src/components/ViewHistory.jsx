import React from "react";
import css from "./ViewHistory.module.css";

const ViewHistory = ({ historyData, handleDeleteHistory }) => {
  const reversedData = [...historyData].reverse();

  return (
    <div className={css.viewHistory}>
      <h2>내역</h2>
      <div>
        {reversedData.map((item, i) => (
          <div
            className={`${css.historyCard} ${
              item.type === "income" ? css.Income : css.Expense
            }`}
            key={i}
          >
            <div>{item.desc}</div>
            <div>
              <div>
                {item.type === "income" ? "+" : "-"}
                {item.amount}₩
              </div>
              <div>
                <button onClick={() => handleDeleteHistory(item)}>삭제</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewHistory;
