import React from "react";
import css from "./ViewHistory.module.css";

const ViewHistory = () => {
  return (
    <div className={css.viewHistory}>
      <h2>내역</h2>
      <div>
        <div className={css.historyCard}>
          <div>4월 용돈</div>
          <div>
            <div>+₩100,000</div>
            <div>
              <button>삭제</button>
            </div>
          </div>
        </div>
        <div className={css.historyCard}>
          <div>4월 용돈</div>
          <div>
            <div>+₩100,000</div>
            <div>
              <button>삭제</button>
            </div>
          </div>
        </div>
        <div className={css.historyCard}>
          <div>4월 용돈</div>
          <div>
            <div>+₩100,000</div>
            <div>
              <button>삭제</button>
            </div>
          </div>
        </div>
        <div className={css.historyCard}>
          <div>4월 용돈</div>
          <div>
            <div>+₩100,000</div>
            <div>
              <button>삭제</button>
            </div>
          </div>
        </div>
        <div className={css.historyCard}>
          <div>4월 용돈</div>
          <div>
            <div>+₩100,000</div>
            <div>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHistory;
