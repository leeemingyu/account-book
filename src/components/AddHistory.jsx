import React, { useState } from "react";
import css from "./AddHistory.module.css";

const AddHistory = ({ handleAddHistory }) => {
  const [type, setType] = useState("income");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleRadioChange = (e) => {
    setType(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAddBtn = () => {
    // console.log("type:", type);
    // console.log("desc:", desc);
    // console.log("amount:", amount);
    if (!desc || !amount) {
      alert("입력해라");
      return;
    }
    const history = {
      type: type === "income" ? "income" : "expense",
      desc: desc,
      amount: amount,
    };
    const prevData = JSON.parse(localStorage.getItem("history") || "[]");
    const updatedData = [...prevData, history];
    localStorage.setItem("history", JSON.stringify(updatedData));
    handleAddHistory(updatedData);
    setDesc("");
    setAmount("");
  };

  return (
    <div className={css.addHistory}>
      <h2>새로운 거래 추가</h2>
      <div>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={handleRadioChange}
            />{" "}
            수입
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={handleRadioChange}
            />{" "}
            지출
          </label>
        </div>
        {/* <label htmlFor="description">내용</label> */}
        <input
          type="text"
          id="description"
          placeholder="내용 입력..."
          onChange={handleDesc}
          value={desc}
        />

        {/* <label htmlFor="amount">금액</label> */}
        <input
          type="text"
          id="amount"
          placeholder="금액 입력..."
          onChange={handleAmount}
          value={amount}
        />
        <button onClick={handleAddBtn}>거래 추가</button>
      </div>
    </div>
  );
};

export default AddHistory;
