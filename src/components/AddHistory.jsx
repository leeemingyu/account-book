import React, { useRef, useState } from "react";
import css from "./AddHistory.module.css";

const AddHistory = ({ handleAddHistory }) => {
  const [type, setType] = useState("income");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [invalidDesc, setInvalidDesc] = useState("");
  const [invalidAmount, setInvalidAmount] = useState("");

  const descriptionInputRef = useRef(null);

  const handleRadioChange = (e) => {
    setType(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
    setInvalidDesc("");
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
    setInvalidAmount("");
  };
  const handleAddBtn = () => {
    if (!desc && !amount) {
      setInvalidDesc("내용을 입력해주세요.");
      setInvalidAmount("금액을 입력해주세요.");
      return;
    }
    if (!desc) {
      setInvalidDesc("내용을 입력해주세요.");
      return;
    }
    if (!amount) {
      setInvalidAmount("금액을 입력해주세요.");
      return;
    }
    if (isNaN(amount)) {
      setInvalidAmount("숫자만 입력해주세요.");
      return;
    }
    if (amount <= 0) {
      setInvalidAmount("양수를 입력해주세요.");
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
    descriptionInputRef.current.focus();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddBtn();
    }
  };

  return (
    <>
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
          <div className={css.inputWrapper}>
            <label htmlFor="description">내용</label>
            <input
              type="text"
              id="description"
              placeholder="내용 입력..."
              onChange={handleDesc}
              value={desc}
              className={invalidDesc === "" ? "" : css.disabledInput}
              autoFocus
              onKeyDown={handleKeyDown}
              ref={descriptionInputRef}
            />
            {invalidDesc === "" ? (
              ""
            ) : (
              <div className={css.alertMsg}>내용을 입력해주세요</div>
            )}
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="amount">금액</label>
            <input
              type="text"
              id="amount"
              placeholder="금액 입력..."
              onChange={handleAmount}
              value={amount}
              className={invalidAmount === "" ? "" : css.disabledInput}
              onKeyDown={handleKeyDown}
            />
            {invalidAmount === "" ? (
              ""
            ) : (
              <div className={css.alertMsg}>{invalidAmount}</div>
            )}
          </div>
          <button onClick={handleAddBtn}>거래 추가</button>
        </div>
      </div>
    </>
  );
};

export default AddHistory;
