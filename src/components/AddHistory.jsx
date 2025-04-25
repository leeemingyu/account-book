import React from "react";
import css from "./AddHistory.module.css";

const AddHistory = () => {
  return (
    <div className={css.addHistory}>
      <h2>새로운 거래 추가</h2>
      <div>
        <div>
          <label>
            <input type="radio" name="type" id="" /> 수입
          </label>
          <label>
            <input type="radio" name="type" id="" /> 지출
          </label>
        </div>
        {/* <label htmlFor="description">내용</label> */}
        <input type="text" id="description" placeholder="내용 입력..." />

        {/* <label htmlFor="amount">금액</label> */}
        <input type="text" id="amount" placeholder="금액 입력..." />
        <button>거래 추가</button>
      </div>
    </div>
  );
};

export default AddHistory;
